import { createHash } from "crypto";
import { encode } from "@blakeembrey/base64url";

/**
 * Return hash algorithm from JOSE header.
 */
function toAlgorithm(alg: string) {
  if (alg.endsWith("512")) return "sha512";
  if (alg.endsWith("384")) return "sha384";
  if (alg.endsWith("256")) return "sha256";

  throw new TypeError(`Unknown algorithm: ${alg}`);
}

/**
 * Generate the token hash from a token string.
 */
export function tokenHash(alg: string, token: string) {
  const hash = createHash(toAlgorithm(alg))
    .update(token)
    .digest();

  return encode(hash.slice(0, hash.length / 2));
}
