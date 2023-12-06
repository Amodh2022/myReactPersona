async function decryptUserId(encryptedUserId, secretKey) {
    const key = await crypto.subtle.importKey(
      'raw',
      new TextEncoder().encode(secretKey),
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['verify']
    );
  
    const data = new TextEncoder().encode(encryptedUserId);
    const signature = await crypto.subtle.sign('HMAC', key, data);
  
    // Convert the signature to a hex string
    const signatureHex = Array.from(new Uint8Array(signature))
      .map((byte) => byte.toString(16).padStart(2, '0'))
      .join('');
  
    return signatureHex;
  }
  
  // Example usage:
  const encryptedUserId = encryptedUserId; // Replace with the actual encrypted user ID
  const secretKey = secretKey; // Replace with the actual secret key
  
  decryptUserId(encryptedUserId, secretKey)
    .then((decryptedUserId) => {
      console.log('Decrypted User ID:', decryptedUserId);
    })
    .catch((error) => {
      console.error('Decryption error:', error);
    });
  