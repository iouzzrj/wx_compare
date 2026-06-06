#include "api.hpp"
#include "crypto.h"
#include <iostream>
#include <nlohmann/json.hpp>
#include <chrono>
#include <thread>
#include <iomanip>
#include <ctime>
#include <clocale>
#include <fstream>
#include <sstream>
#ifdef _WIN32
#include <Windows.h>
#endif

using json = nlohmann::json;

// Configuration variables loaded from external file.
std::string loginSignature;    // signature from login request header
std::string x_version;         // x-version from login response header
std::string loginDataHex;      // value of the "data" field from login response body

std::string access_token;            // extracted after decrypting loginDataHex
std::string patientId;   // example patient id
std::string visitDate; // also used as time parameter
int scheduleMode;
std::string deptId;
std::string doctId;
std::string dist; // also used as tapIndex
int startHour;
int startMinute;
int startSecond;
int handshakeStartOffsetMin;
int handshakeDeadlineOffsetSec;
int requestMomentOffsetMs;
int scheduleRetryTimes;

// Recursively search for access_token / accessToken within JSON object
static std::string findAccessToken(const json& j) {
	if (j.is_object()) {
		for (auto it = j.begin(); it != j.end(); ++it) {
			if (it.key() == "access_token" || it.key() == "accessToken")
				return it.value().get<std::string>();
			std::string nested = findAccessToken(it.value());
			if (!nested.empty()) return nested;
		}
	}
	else if (j.is_array()) {
		for (const auto& el : j) {
			std::string nested = findAccessToken(el);
			if (!nested.empty()) return nested;
		}
	}
	return "";
}

// Load configuration from JSON file.
static void loadConfig(const std::string& path) {
	std::ifstream in(path);
	if (!in) {
		throw std::runtime_error("Failed to open config file: " + path);
	}
	json cfg;
	in >> cfg;
	loginSignature = cfg.value("loginSignature", "");
	x_version = cfg.value("x_version", "");
	loginDataHex = cfg.value("loginDataHex", "");
	patientId = cfg.value("patientId", "");
	visitDate = cfg.value("visitDate", "");
	scheduleMode = cfg.value("scheduleMode", 1);
	deptId = cfg.value("deptId", "");
	doctId = cfg.value("doctId", "");
	dist = cfg.value("dist", "");
	startHour = cfg.value("hour", 0);
	startMinute = cfg.value("minute", 0);
	startSecond = cfg.value("second", 0);
	handshakeStartOffsetMin = cfg.value("handshakeStartOffsetMin", 1);
	handshakeDeadlineOffsetSec = cfg.value("handshakeDeadlineOffsetSec", 10);
	requestMomentOffsetMs = cfg.value("requestMomentOffsetMs", 20);
	scheduleRetryTimes = cfg.value("scheduleRetryTimes", 3);
}

static std::string loginAndExtractToken() {
	const std::string apiSecret = "nY-Pksdkjfiwejrksdf_LsJP_@#(*$##)";
	std::string loginPlain = decodeData(loginDataHex, loginSignature, apiSecret);
	json loginJson = json::parse(loginPlain);
	std::string token = findAccessToken(loginJson);
	if (token.empty()) {
		throw std::runtime_error("access_token not found in login response");
	}
	return token;
}

static ScheduleEntry getAndSelectSchedule1(const std::string& accessToken,
	int maxAttempts) {
	for (int i = 0; i < maxAttempts; ++i) {
		std::string scheduleJson = getYyScheduleList(accessToken, x_version,
			dist, deptId, doctId, visitDate);
		//std::cout << "Schedule list: " << scheduleJson << std::endl;
		if (!availableSchedules.empty()) {
			size_t mid = availableSchedules.size() / 2;
			return availableSchedules[mid];
		}
	}
	throw std::runtime_error("No available schedules after retries.");
}

static ScheduleEntry getAndSelectSchedule2(const std::string& accessToken,
	int maxAttempts) {
	for (int i = 0; i < maxAttempts; ++i) {
		std::string scheduleJson = getScheduleList(accessToken, x_version,
			dist, deptId, doctId, visitDate);
		//std::cout << "Schedule list: " << scheduleJson << std::endl;
		if (!availableSchedules.empty()) {
			size_t mid = availableSchedules.size() / 2;
			return availableSchedules[mid];
		}
	}
	throw std::runtime_error("No available schedules after retries.");
}

static std::string createOrder1(const std::string& accessToken, const ScheduleEntry& sel) {
	return yyAppointmentCreateOrder(accessToken, x_version, patientId,
		sel.scheduleId, visitDate, deptId, sel.sguId, dist);
}

static std::string createOrder2(const std::string& accessToken, const ScheduleEntry& sel) {
	return todayAppointmentCreateOrder(accessToken, x_version, patientId,
		sel.scheduleId, visitDate, deptId, sel.sguId, dist);
}

// Send a simple request to keep the connection alive.
static void handshake(const std::string& accessToken) {
	std::string scheduleJson = getYyScheduleList(accessToken, x_version, dist, deptId, doctId, visitDate);
	std::cout << "Handshake response: " << scheduleJson << std::endl;
}

static std::string formatTime(const std::chrono::system_clock::time_point& tp) {
	// 转换成 time_t（秒部分）
	std::time_t t = std::chrono::system_clock::to_time_t(tp);
	std::tm tm{};
#ifdef _WIN32
	localtime_s(&tm, &t); // Windows
#else
	localtime_r(&t, &tm); // Linux/Unix
#endif

	// 提取毫秒部分
	auto ms = std::chrono::duration_cast<std::chrono::milliseconds>(
		tp.time_since_epoch()) % 1000;

	// 用 stringstream 格式化
	std::ostringstream oss;
	oss << std::put_time(&tm, "%Y-%m-%d %H:%M:%S")
		<< '.' << std::setfill('0') << std::setw(3) << ms.count();
	return oss.str();
}

static void waitForTime(const std::chrono::system_clock::time_point& target) {
	while (true) {
		auto current = std::chrono::system_clock::now();
		//auto remaining = target - current;
		//std::cout << "当前时间: " << formatTime(current)
		//	<< ", 剩余: "
		//	<< std::chrono::duration_cast<std::chrono::milliseconds>(remaining).count()
		//	<< "ms" << std::endl;
		if (current >= target) {
			//std::cout << "Starting the action now..." << std::endl;
			break;
		}
	}
}

int main() {
#ifdef _WIN32
	SetConsoleOutputCP(CP_UTF8);
#else
	std::setlocale(LC_ALL, "");
#endif
	try {
		loadConfig("config.json");
		if (loginDataHex.empty() || loginSignature.empty() || x_version.empty()) {
			std::cout << "Populate loginDataHex, loginSignature and x_version in config.json before running network calls." << std::endl;
			return 0;
		}

		access_token = loginAndExtractToken();

		using namespace std::chrono;
		auto now = system_clock::now();
		std::time_t tt = system_clock::to_time_t(now);
		std::tm tm{};
#ifdef _WIN32
		localtime_s(&tm, &tt);
#else
		localtime_r(&tt, &tm);
#endif
		tm.tm_hour = startHour;
		tm.tm_min = startMinute;
		tm.tm_sec = startSecond;
		auto targetTime = system_clock::from_time_t(std::mktime(&tm));
		auto handshakeStart = targetTime - minutes(handshakeStartOffsetMin);
		auto handshakeDeadline = targetTime - seconds(handshakeDeadlineOffsetSec);
		auto requestMoment = targetTime - milliseconds(requestMomentOffsetMs);

		bool handshakePerformed = false;
		auto lastHandshakeAt = system_clock::time_point{};
		while (true) {
			auto now = system_clock::now();
			if (now >= handshakeStart && now < handshakeDeadline) {
				if (!handshakePerformed || now - lastHandshakeAt >= seconds(15)) {
					std::cout << "进行TCP保持连接" << std::endl;

					std::cout << formatTime(system_clock::now()) << '\n';
					handshake(access_token);
					std::cout << formatTime(system_clock::now()) << '\n';

					handshakePerformed = true;
					lastHandshakeAt = now;
				}
			}
			else if (now >= handshakeDeadline) {
				std::cout << "当前时间: " << formatTime(now)
					<< ", 停止握手，准备抢号" << std::endl;
				break;
			}
			else {
				auto remaining = handshakeStart - now;
				std::cout << "当前时间: " << formatTime(now)
					<< ", 距离握手开始还剩: "
					<< duration_cast<seconds>(remaining).count()
					<< "s" << std::endl;
			}
			//std::this_thread::sleep_for(seconds(1));
		}

		waitForTime(requestMoment);

		ScheduleEntry sel;
		std::string orderJson;
		if (scheduleMode == 1) {
			sel = getAndSelectSchedule1(access_token, scheduleRetryTimes);
			orderJson = createOrder1(access_token, sel);
		}
		else {
			sel = getAndSelectSchedule2(access_token, scheduleRetryTimes);
			orderJson = createOrder2(access_token, sel);
		}

		std::cout << "Order response: " << orderJson << std::endl;
	}
	catch (const std::exception& ex) {
		std::cerr << "Error: " << ex.what() << std::endl;
	}
	return 0;
}
