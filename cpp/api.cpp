#include "crypto.h"
#include "api.hpp"
#include <openssl/evp.h>
#include <openssl/md5.h>
#include <curl/curl.h>
#include <nlohmann/json.hpp>
#include <chrono>
#include <random>
#include <ctime>
#include <sstream>
#include <iomanip>
#include <map>
#include <algorithm>
#include <cctype>
#include <stdexcept>
#include <vector>

using json = nlohmann::json;

std::vector<ScheduleEntry> availableSchedules;

namespace {
	const std::string kApiSecret = "nY-Pksdkjfiwejrksdf_LsJP_@#(*$##)";
	const std::string kBaseUrl = "https://app.bdkq.mingxuan.store";
	const std::string kReferer = "Referer: https://servicewechat.com/wxf47aa38d871be854/318/page-frame.html";
	const std::string kUserAgent = "User-Agent: Mozilla/5.0 (Linux; Android 14; XQ-DE72 Build/67.1.F.2.220; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/142.0.7444.173 Mobile Safari/537.36 XWEB/1420229 MMWEBSDK/20260201 MMWEBID/9298 MicroMessenger/8.0.69.3022(0x28004542) WeChat/arm64 Weixin GPVersion/1 NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android";

	std::string trim(const std::string& s) {
		auto start = s.find_first_not_of(" \t\n\r");
		if (start == std::string::npos) return "";
		auto end = s.find_last_not_of(" \t\n\r");
		return s.substr(start, end - start + 1);
	}

	std::string toLower(std::string s) {
		std::transform(s.begin(), s.end(), s.begin(), [](unsigned char c) { return std::tolower(c); });
		return s;
	}

	bool v(const std::string& s) {
		std::string t = trim(s);
		std::string lower = toLower(t);
		return t.empty() || lower == "null" || lower == "undefined" || t == "{}" || t == "[]";
	}

	bool O(const std::string& t, const std::initializer_list<std::string>& list) {
		for (auto& item : list) {
			if (item.find(t) != std::string::npos || t.find(item) != std::string::npos)
				return true;
		}
		return false;
	}

	std::string A(const std::string& t) {
		return trim(t);
	}

	bool L(const std::string& t) {
		std::string n = toLower(A(t));
		return !v(n) && !O(n, { "null","undefined","{}","[]" }) && n.length() <= 2048;
	}

	std::string I(const std::string& t) {
		std::ostringstream oss;
		for (unsigned char c : t) {
			if (c >= ' ' && c < 127) oss << c;
			else {
				oss << "\\u" << std::hex << std::setw(4) << std::setfill('0') << (int)c;
			}
		}
		return oss.str();
	}

	std::string base64Encode(const std::string& input) {
		int len = 4 * ((input.size() + 2) / 3);
		std::string out(len, '\0');
		EVP_EncodeBlock(reinterpret_cast<unsigned char*>(&out[0]),
			reinterpret_cast<const unsigned char*>(input.data()),
			input.size());
		return out;
	}

	std::string sm3_hash(const std::string& input) {
		EVP_MD_CTX* ctx = EVP_MD_CTX_new();
		const EVP_MD* md = EVP_sm3();
		EVP_DigestInit_ex(ctx, md, nullptr);
		EVP_DigestUpdate(ctx, input.data(), input.size());
		unsigned char md_buf[EVP_MAX_MD_SIZE];
		unsigned int md_len = 0;
		EVP_DigestFinal_ex(ctx, md_buf, &md_len);
		EVP_MD_CTX_free(ctx);
		std::ostringstream oss;
		for (unsigned int i = 0; i < md_len; ++i)
			oss << std::hex << std::setw(2) << std::setfill('0') << (int)md_buf[i];
		return oss.str();
	}

	// Compute MD5 digest of input and return as hex string.
	// Uses the EVP interface so it is compatible with OpenSSL 3.0.
	std::string md5_hex(const std::string& input) {
		unsigned char md[EVP_MAX_MD_SIZE];
		unsigned int md_len = 0;
		EVP_MD_CTX* ctx = EVP_MD_CTX_new();
		if (!ctx) throw std::runtime_error("EVP_MD_CTX_new failed");
		if (EVP_DigestInit_ex(ctx, EVP_md5(), nullptr) != 1) {
			EVP_MD_CTX_free(ctx);
			throw std::runtime_error("EVP_DigestInit_ex failed");
		}
		if (EVP_DigestUpdate(ctx, input.data(), input.size()) != 1) {
			EVP_MD_CTX_free(ctx);
			throw std::runtime_error("EVP_DigestUpdate failed");
		}
		if (EVP_DigestFinal_ex(ctx, md, &md_len) != 1) {
			EVP_MD_CTX_free(ctx);
			throw std::runtime_error("EVP_DigestFinal_ex failed");
		}
		EVP_MD_CTX_free(ctx);
		std::ostringstream oss;
		for (unsigned int i = 0; i < md_len; ++i) {
			oss << std::hex << std::setw(2) << std::setfill('0') << (int)md[i];
		}
		return oss.str();
	}

	long long currentMillis() {
		return std::chrono::duration_cast<std::chrono::milliseconds>(
			std::chrono::system_clock::now().time_since_epoch()).count();
	}

	std::string uuid4() {
		static const char* hex = "0123456789abcdef";
		std::random_device rd; std::mt19937 gen(rd());
		std::uniform_int_distribution<int> dis(0, 15);
		std::string out(36, ' ');
		for (int i = 0; i < 36; i++) {
			switch (i) {
			case 8: case 13: case 18: case 23: out[i] = '-'; break;
			case 14: out[i] = '4'; break;
			case 19: out[i] = hex[(dis(gen) & 0x3) | 0x8]; break;
			default: out[i] = hex[dis(gen)];
			}
		}
		return out;
	}

	std::string x() {
		std::random_device rd; std::mt19937 gen(rd());
		std::uniform_int_distribution<int> dis24(0, 0xFFFFFF);
		std::uniform_int_distribution<int> dis16(0, 0xFFFF);
		std::ostringstream oss;
		oss << std::hex << std::time(nullptr);
		oss << std::setw(6) << std::setfill('0') << dis24(gen);
		oss << std::setw(4) << std::setfill('0') << dis16(gen);
		oss << std::setw(6) << std::setfill('0') << dis24(gen);
		return oss.str();
	}

	std::string w(const std::string& accessToken) {
		std::string t1 = md5_hex(accessToken);
		std::string t2 = md5_hex(x());
		auto sub1 = toLower(t1.substr(8, 16));
		auto sub2 = toLower(t2.substr(8, 16));
		return sub1 + "#" + sub2;
	}

	std::string join(const std::vector<std::string>& arr, const std::string& sep) {
		std::ostringstream oss;
		for (size_t i = 0; i < arr.size(); ++i) {
			if (i) oss << sep;
			oss << arr[i];
		}
		return oss.str();
	}

	std::string computeSignature(const std::map<std::string, std::string>& params,
		const std::string& body,
		const std::string& requestOtp,
		long long requestTime) {
		std::vector<std::string> items;
		for (auto& kv : params) {
			if (L(kv.second)) {
				items.push_back(I(kv.first) + "=" + I(A(kv.second)));
			}
		}
		if (L(body)) {
			items.push_back(I(A(body)));
		}
		items.push_back("requesttime=" + std::to_string(requestTime));
		items.push_back("requestotp=" + requestOtp);
		items.push_back("secret=" + kApiSecret);
		std::string u = join(items, "&");
		std::string c = sm3_hash(std::to_string(requestTime) + "##" + kApiSecret);
		std::string d = sm3_hash(requestOtp + "##" + kApiSecret);
		std::string l = base64Encode(u);
		return sm3_hash("[" + c + "#" + sm3_hash(l) + "#" + d + "]");
	}

	size_t write_cb(void* contents, size_t size, size_t nmemb, void* userp) {
		size_t total = size * nmemb;
		std::string* s = static_cast<std::string*>(userp);
		s->append(static_cast<char*>(contents), total);
		return total;
	}

	std::string postRequest(const std::string& path,
		const std::string& plainBody,
		const std::string& accessToken,
		const std::string& xVersion,
		const std::vector<std::string>& extraHeaders = {}) {
		long long requestTime = currentMillis();
		std::string requestOtp = uuid4();
		std::map<std::string, std::string> params; // no query parameters
		std::string signature = computeSignature(params, plainBody, requestOtp, requestTime);
		std::string encryptedHex = encodeRequestData(plainBody, signature);
		json bodyJson = { {"data", encryptedHex} };
		std::string bodyStr = bodyJson.dump();
		std::string rid = w(accessToken);

		std::string url = kBaseUrl + "/xcx-bjdxkqyy-wx@" + xVersion + path;

		// Reuse a persistent CURL handle so that libcurl can keep the
		// TCP connection alive across requests. This avoids the cost of
		// establishing a new TCP/TLS handshake for every API call.
		static CURL* curl = nullptr;
		if (!curl) {
			curl = curl_easy_init();
			if (!curl) throw std::runtime_error("curl init failed");
			atexit([]() { if (curl) curl_easy_cleanup(curl); });
		}
		else {
			// Reset handle options between requests without
			// destroying the cached connection.
			curl_easy_reset(curl);
		}

		std::string response;
		struct curl_slist* headers = nullptr;
		headers = curl_slist_append(headers, "Content-Type: application/json");
		headers = curl_slist_append(headers, "charset: utf-8");
		std::string h = "access_token: " + accessToken; headers = curl_slist_append(headers, h.c_str());
		h = "request_otp: " + requestOtp; headers = curl_slist_append(headers, h.c_str());
		h = "request_time: " + std::to_string(requestTime); headers = curl_slist_append(headers, h.c_str());
		h = "signature: " + signature; headers = curl_slist_append(headers, h.c_str());
		h = "rid: " + rid; headers = curl_slist_append(headers, h.c_str());
		for (const auto& eh : extraHeaders) {
			headers = curl_slist_append(headers, eh.c_str());
		}

		// 禁止 curl 默认 Accept: */*
		headers = curl_slist_append(headers, "Accept:");

		curl_easy_setopt(curl, CURLOPT_URL, url.c_str());
		curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);
		curl_easy_setopt(curl, CURLOPT_POST, 1L);
		curl_easy_setopt(curl, CURLOPT_POSTFIELDS, bodyStr.c_str());
		curl_easy_setopt(curl, CURLOPT_POSTFIELDSIZE, bodyStr.size());
		curl_easy_setopt(curl, CURLOPT_SSL_OPTIONS, CURLSSLOPT_NO_REVOKE);  // reqable 抓包需设置
		curl_easy_setopt(curl, CURLOPT_ACCEPT_ENCODING, "");
		curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, write_cb);
		curl_easy_setopt(curl, CURLOPT_WRITEDATA, &response);

		curl_easy_setopt(curl, CURLOPT_HTTP_VERSION, CURL_HTTP_VERSION_2_0);

		CURLcode res = curl_easy_perform(curl);
		curl_slist_free_all(headers);
		if (res != CURLE_OK) throw std::runtime_error("curl_easy_perform failed");
		auto parsed = json::parse(response);
		std::string dataHex = parsed.value("data", "");
		if (dataHex.empty()) throw std::runtime_error("no data in response");
		return decodeData(dataHex, signature, kApiSecret);
	}

} // namespace

std::string getYyScheduleList(const std::string& accessToken,
	const std::string& xVersion,
	const std::string& tapIndex,
	const std::string& deptId,
	const std::string& doctId,
	const std::string& time) {
	json payload = {
		{"areaCode", tapIndex},
		{"deptId", deptId},
		{"doctId", doctId},
		{"time", time}
	};
	std::vector<std::string> headers = { kReferer, kUserAgent };
	std::string resp = postRequest("/api/regist/getYyScheduleList", payload.dump(), accessToken, xVersion, headers);
	try {
		auto parsed = json::parse(resp);
		availableSchedules.clear();
		if (parsed.contains("data") && parsed["data"].is_array()) {
			for (auto& item : parsed["data"]) {
				int numbers = item.value("numbers", 0);
				if (numbers > 0) {
					ScheduleEntry e{
						item.value("scheduleId", ""),
						item.value("sguID", ""),
						numbers
					};
					availableSchedules.push_back(std::move(e));
				}
			}
		}
	}
	catch (...) {
		// ignore parse errors; availableSchedules remains as is
	}
	return resp;
}

std::string yyAppointmentCreateOrder(const std::string& accessToken,
	const std::string& xVersion,
	const std::string& patientId,
	const std::string& scheduleId,
	const std::string& visitDate,
	const std::string& deptId,
	const std::string& sguId,
	const std::string& dist) {
	json payload = {
		{"patientId", patientId},
		{"scheduleId", scheduleId},
		{"visitDate", visitDate},
		{"deptId", deptId},
		{"sguId", sguId},
		{"areaCode", dist}
	};
	std::vector<std::string> headers = { kReferer, kUserAgent };
	return postRequest("/api/registRecord/yyOrder", payload.dump(), accessToken, xVersion, headers);
}

std::string getScheduleList(const std::string& accessToken,
	const std::string& xVersion,
	const std::string& tapIndex,
	const std::string& deptId,
	const std::string& doctId,
	const std::string& visitDate) {
	json payload = {
			{"areaCode", tapIndex},
			{"deptId", deptId},
			{"doctId", doctId},
			{"visitDate", visitDate}
	};
	std::vector<std::string> headers = { kReferer, kUserAgent };
	std::string resp = postRequest("/api/regist/getScheduleList", payload.dump(), accessToken, xVersion, headers);
	try {
		auto parsed = json::parse(resp);
		availableSchedules.clear();
		if (parsed.contains("data") && parsed["data"].is_array()) {
			for (auto& item : parsed["data"]) {
				int numbers = item.value("numbers", 0);
				if (numbers > 0) {
					ScheduleEntry e{
							item.value("scheduleId", ""),
							item.value("sguID", ""),
							numbers
					};
					availableSchedules.push_back(std::move(e));
				}
			}
		}
	}
	catch (...) {
		// ignore parse errors; availableSchedules remains as is
	}
	return resp;
}

std::string todayAppointmentCreateOrder(const std::string& accessToken,
	const std::string& xVersion,
	const std::string& patientId,
	const std::string& scheduleId,
	const std::string& visitDate,
	const std::string& deptId,
	const std::string& sguId,
	const std::string& dist) {
	json payload = {
			{"patientId", patientId},
			{"scheduleId", scheduleId},
			{"visitDate", visitDate},
			{"deptId", deptId},
			{"sguId", sguId},
			{"areaCode", dist}
	};
	std::vector<std::string> headers = { kReferer, kUserAgent };
	return postRequest("/api/registRecord/todayOrder", payload.dump(), accessToken, xVersion, headers);
}
