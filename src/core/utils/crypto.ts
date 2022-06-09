import crypto from 'crypto';

const algorithm = 'aes-192-cbc';
const cryptoKeyDefault = process.env.CRYPTO_KEY_DEFAULT;
const algorithmLogin = 'aes-256-ctr';
const cryptoKeyLogin = process.env.CRYPTO_KEY_LOGIN;

const encrypt = (text: string): string => {
  try {
    const key = crypto.scryptSync(cryptoKeyDefault, 'salt', 24);
    const iv = Buffer.alloc(16, 0);

    const cipher = crypto.createCipheriv(algorithm, key, iv);

    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');

    return encrypted;
  } catch (error) {
    console.log('encrypt', error);
    throw new Error('BadRequest');
  }
};

const decrypt = (cipher: string): string => {
  try {
    const key = crypto.scryptSync(cryptoKeyDefault, 'salt', 24);
    // The IV is usually passed along with the ciphertext.
    const iv = Buffer.alloc(16, 0); // Initialization vector.

    const decipher = crypto.createDecipheriv(algorithm, key, iv);

    // Encrypted using same algorithm, key and iv.
    const encrypted = cipher;

    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');

    return decrypted;
  } catch (error) {
    console.log('decrypt', error);
    throw new Error('BadRequest');
  }
};

const decryptLogin = (ciphertext: string, nonce: any): string => {
  try {
    const parsedNonce = Buffer.from(nonce.data);
    const decipher = crypto.createDecipheriv(
      algorithmLogin,
      cryptoKeyLogin,
      parsedNonce
    );
    const receivedPlaintext = decipher.update(ciphertext, 'hex', 'utf8');

    decipher.final();

    return receivedPlaintext;
  } catch (error) {
    console.log('decrypt', error);
    throw new Error('BadRequest');
  }
};

export { encrypt, decrypt, decryptLogin };
