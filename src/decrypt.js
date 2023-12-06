import CryptoJS from 'crypto-js';

export function decryptUserId(encryptedUserId, secretKey) {
  const key = CryptoJS.enc.Utf8.parse(secretKey);
  const bytes = CryptoJS.AES.decrypt(encryptedUserId, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });

  const decryptedUserId = bytes.toString(CryptoJS.enc.Utf8);
  return decryptedUserId;
}