#include <openssl/evp.h>
#include <openssl/err.h>
#include <string>
#include <vector>
#include <stdexcept>
#include <sstream>
#include <iomanip>

// Utilities for decoding the HTTP payloads used by the mini program.
//
// Requests encrypt their JSON body using SM4-ECB.  The encryption key is the
// ASCII bytes of `signature.substring(24, 40)`.
//
// Responses derive the key from the signature and the apiSecret:
//   combined = reverse(signature + ":" + apiSecret)
//   digest   = SM3(combined)
//   keyHex   = digest.substr(24, 16)
//   swap each pair of characters in keyHex
//   use ASCII bytes of the result as the 16-byte key

static std::vector<unsigned char> hex_to_bytes(const std::string& hex) {
	std::vector<unsigned char> bytes;
	if (hex.size() % 2 != 0) throw std::invalid_argument("invalid hex length");
	bytes.reserve(hex.size() / 2);
	for (size_t i = 0; i < hex.size(); i += 2) {
		unsigned int byte;
		std::stringstream ss;
		ss << std::hex << hex.substr(i, 2);
		ss >> byte;
		bytes.push_back(static_cast<unsigned char>(byte));
	}
	return bytes;
}

static std::string sm3_hash(const std::string& input) {
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

static std::string sm4_decrypt(const std::vector<unsigned char>& cipher,
	const std::vector<unsigned char>& key) {
	EVP_CIPHER_CTX* ctx = EVP_CIPHER_CTX_new();
	const EVP_CIPHER* cipher_type = EVP_sm4_ecb();
	if (EVP_DecryptInit_ex(ctx, cipher_type, nullptr, key.data(), nullptr) != 1)
		throw std::runtime_error("EVP_DecryptInit_ex failed");
	EVP_CIPHER_CTX_set_padding(ctx, 1);
	std::vector<unsigned char> out(cipher.size() + EVP_CIPHER_block_size(cipher_type));
	int outlen1 = 0;
	if (EVP_DecryptUpdate(ctx, out.data(), &outlen1, cipher.data(), cipher.size()) != 1)
		throw std::runtime_error("EVP_DecryptUpdate failed");
	int outlen2 = 0;
	if (EVP_DecryptFinal_ex(ctx, out.data() + outlen1, &outlen2) != 1)
		throw std::runtime_error("EVP_DecryptFinal_ex failed");
	EVP_CIPHER_CTX_free(ctx);
	return std::string(reinterpret_cast<char*>(out.data()), outlen1 + outlen2);
}

std::string decodeData(const std::string& dataHex,
	const std::string& signature,
	const std::string& apiSecret) {
	std::string combined = signature + ":" + apiSecret;
	std::string reversed(combined.rbegin(), combined.rend());
	std::string digest = sm3_hash(reversed);
	std::string sub = digest.substr(24, 16);
	for (size_t i = 0;i < sub.size();i += 2) std::swap(sub[i], sub[i + 1]);
	std::vector<unsigned char> key(sub.begin(), sub.end());
	std::vector<unsigned char> cipher = hex_to_bytes(dataHex);
	return sm4_decrypt(cipher, key);
}

std::string decodeRequestData(const std::string& dataHex,
	const std::string& signature) {
	if (signature.size() < 40)
		throw std::invalid_argument("signature too short");
	std::string sub = signature.substr(24, 16);
	std::vector<unsigned char> key(sub.begin(), sub.end());
	std::vector<unsigned char> cipher = hex_to_bytes(dataHex);
	return sm4_decrypt(cipher, key);
}
