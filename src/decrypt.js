// decryptionModule.js

export async function decryptUserId(encryptedUserId, secretKey) {
    console.log(encryptedUserId);

    const key = await crypto.subtle.importKey(
        'raw',
        new TextEncoder().encode(secretKey),
        { name: 'HMAC', hash: 'SHA-256' },
        false,
        ['sign']  // Add 'sign' to the list of usages
    );

    const data = new TextEncoder().encode(encryptedUserId);
    const signature = await crypto.subtle.sign('HMAC', key, data);

    const signatureHex = Array.from(new Uint8Array(signature))
        .map((byte) => byte.toString(16).padStart(2, '0'))
        .join('');

    return signatureHex;
}
