#pragma once
#include <string>
#include <vector>

struct ScheduleEntry {
    std::string scheduleId;
    std::string sguId;
    int numbers;
};

// Filled by getYyScheduleList with slots that still have remaining numbers.
extern std::vector<ScheduleEntry> availableSchedules;

// Perform POST to /api/regist/getYyScheduleList
// Returns decrypted JSON string on success, throws std::runtime_error on failure.
std::string getYyScheduleList(const std::string &accessToken,
                              const std::string &xVersion,
                              const std::string &tapIndex,
                              const std::string &deptId,
                              const std::string &doctId,
                              const std::string &time);

// Perform POST to /api/regist/getScheduleList
// Returns decrypted JSON string on success, throws std::runtime_error on failure.
std::string getScheduleList(const std::string &accessToken,
                            const std::string &xVersion,
                            const std::string &tapIndex,
                            const std::string &deptId,
                            const std::string &doctId,
                            const std::string &visitDate);

// Perform POST to /api/registRecord/yyOrder
// Returns decrypted JSON string on success.
std::string yyAppointmentCreateOrder(const std::string &accessToken,
                                     const std::string &xVersion,
                                     const std::string &patientId,
                                     const std::string &scheduleId,
                                     const std::string &visitDate,
                                     const std::string &deptId,
                                     const std::string &sguId,
                                     const std::string &dist);

// Perform POST to /api/registRecord/todayOrder
// Returns decrypted JSON string on success.
std::string todayAppointmentCreateOrder(const std::string &accessToken,
                                        const std::string &xVersion,
                                        const std::string &patientId,
                                        const std::string &scheduleId,
                                        const std::string &visitDate,
                                        const std::string &deptId,
                                        const std::string &sguId,
                                        const std::string &dist);
