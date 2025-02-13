import { Address, assertIsAddress, getAddressEncoder } from '@solana/web3.js'

/**
 * Given an {@link Address}, return a {@link CryptoKey} that can be used to verify signatures.
 *
 * @example
 * ```ts
 * import { getAddressFromPublicKey } from '@solana/addresses';
 *
 * const publicKey = await getPublicKeyFromAddress(address);
 * ```
 */
export async function getPublicKeyFromAddress(address: Address, extractable: boolean = false) {
  assertIsAddress(address)
  const addressBytes = getAddressEncoder().encode(address)

  return await crypto.subtle.importKey('raw', addressBytes, 'Ed25519', extractable, ['verify'])
}