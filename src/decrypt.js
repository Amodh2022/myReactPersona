import CryptoJS from 'crypto-js';

export function decryptUserId(encryptedUserId, secretKey) {
  try {
    const key = CryptoJS.enc.Utf8.parse(secretKey);
    const data = CryptoJS.enc.Utf8.parse(encryptedUserId);

    const hmacSha256 = CryptoJS.HmacSHA256(data, key);
    const signature = CryptoJS.enc.Hex.stringify(hmacSha256);

    return signature;
  } catch (error) {
    console.error('Decryption error:', error);
    return null; // Or handle the error as needed
  }
}
