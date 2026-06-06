#include <openssl/evp.h>
#include <openssl/err.h>
#include <string>
#include <vector>
#include <stdexcept>
#include <sstream>
#include <iomanip>

// Utilities for encoding HTTP payloads for the mini program.
// Logic extracted from the JavaScript sources (request/request.js and
// common/vendor.js).
//
// Requests encrypt their JSON body using SM4-ECB.  The key is the ASCII
// bytes of `signature.substring(24, 40)` (see `m()` and the call to
// `SMCrypto.sm4.encrypt` in request.js).
//
// Responses derive the key from the header signature and apiSecret as in
// the `b()` function of request.js: the reversed string
// `signature + ':' + apiSecret` is hashed with SM3, characters 24..39 of the
// hex digest are taken, every pair of characters is swapped, and the ASCII
// bytes of the result form the 16-byte SM4 key.

static std::vector<unsigned char> hex_to_bytes(const std::string& hex) {
	std::vector<unsigned char> bytes;
	if (hex.size() % 2 != 0) throw std::invalid_argument("invalid hex length");
	bytes.reserve(hex.size() / 2);
	for (size_t i = 0;i < hex.size();i += 2) {
		unsigned int byte; std::stringstream ss; ss << std::hex << hex.substr(i, 2); ss >> byte; bytes.push_back(static_cast<unsigned char>(byte));
	}
	return bytes;
}

static std::string bytes_to_hex(const std::vector<unsigned char>& bytes) {
	std::ostringstream oss;
	for (unsigned char b : bytes)
		oss << std::hex << std::setw(2) << std::setfill('0') << (int)b;
	return oss.str();
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
	for (unsigned int i = 0;i < md_len;++i)
		oss << std::hex << std::setw(2) << std::setfill('0') << (int)md_buf[i];
	return oss.str();
}

static std::vector<unsigned char> sm4_encrypt(const std::vector<unsigned char>& plain,
	const std::vector<unsigned char>& key) {
	EVP_CIPHER_CTX* ctx = EVP_CIPHER_CTX_new();
	const EVP_CIPHER* cipher = EVP_sm4_ecb();
	if (EVP_EncryptInit_ex(ctx, cipher, nullptr, key.data(), nullptr) != 1)
		throw std::runtime_error("EVP_EncryptInit_ex failed");
	EVP_CIPHER_CTX_set_padding(ctx, 1);
	std::vector<unsigned char> out(plain.size() + EVP_CIPHER_block_size(cipher));
	int outlen1 = 0;
	if (EVP_EncryptUpdate(ctx, out.data(), &outlen1, plain.data(), plain.size()) != 1)
		throw std::runtime_error("EVP_EncryptUpdate failed");
	int outlen2 = 0;
	if (EVP_EncryptFinal_ex(ctx, out.data() + outlen1, &outlen2) != 1)
		throw std::runtime_error("EVP_EncryptFinal_ex failed");
	EVP_CIPHER_CTX_free(ctx);
	out.resize(outlen1 + outlen2);
	return out;
}

std::string encodeRequestData(const std::string& plain,
	const std::string& signature) {
	if (signature.size() < 40)
		throw std::invalid_argument("signature too short");
	std::string sub = signature.substr(24, 16);
	std::vector<unsigned char> key(sub.begin(), sub.end());
	std::vector<unsigned char> plainBytes(plain.begin(), plain.end());
	std::vector<unsigned char> cipher = sm4_encrypt(plainBytes, key);
	return bytes_to_hex(cipher);
}

std::string encodeData(const std::string& plain,
	const std::string& signature,
	const std::string& apiSecret) {
	std::string combined = signature + ":" + apiSecret;
	std::string reversed(combined.rbegin(), combined.rend());
	std::string digest = sm3_hash(reversed);
	std::string sub = digest.substr(24, 16);
	for (size_t i = 0;i < sub.size();i += 2) std::swap(sub[i], sub[i + 1]);
	std::vector<unsigned char> key(sub.begin(), sub.end());
	std::vector<unsigned char> plainBytes(plain.begin(), plain.end());
	std::vector<unsigned char> cipher = sm4_encrypt(plainBytes, key);
	return bytes_to_hex(cipher);
}