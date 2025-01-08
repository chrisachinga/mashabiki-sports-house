const encoder = new TextEncoder();

// Retrieve the encryption key from the environment variable
const keyEnv = process.env.ENCRYPTION_KEY;

// If the key is empty or undefined, fall back to a default key and log a warning
const key = keyEnv ? new TextEncoder().encode(keyEnv) : new TextEncoder().encode('default-secret-key');
if (!keyEnv) {
  console.warn('Warning: No ENCRYPTION_KEY provided. Using a default key.');
}

// Hash function with key-based encryption
export const hash = async (plainPassword: string): Promise<string> => {
  const passwordData = encoder.encode(plainPassword);

  // Import the key for HMAC (SHA-256) from the environment variable or fallback
  const cryptoKey = await crypto.subtle.importKey(
    'raw',
    key,
    { name: 'HMAC', hash: { name: 'SHA-256' } },
    false,
    ['sign', 'verify']
  );

  // Generate the hash using HMAC with SHA-256
  const hashBuffer = await crypto.subtle.sign('HMAC', cryptoKey, passwordData);

  // Convert the hash buffer to a hexadecimal string
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
};

// Compare function using the hash function
export const compare = async (
  plainPassword: string,
  encryptedPassword: string
): Promise<boolean> => {
  const hashedPassword = await hash(plainPassword);
  return hashedPassword === encryptedPassword;
};