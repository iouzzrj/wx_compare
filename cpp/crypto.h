#pragma once
#include <string>

std::string encodeRequestData(const std::string &plain,
                              const std::string &signature);
std::string encodeData(const std::string &plain,
                       const std::string &signature,
                       const std::string &apiSecret);
std::string decodeData(const std::string &dataHex,
                       const std::string &signature,
                       const std::string &apiSecret);
std::string decodeRequestData(const std::string &dataHex,
                              const std::string &signature);
