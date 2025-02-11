import { Address } from '@solana/web3.js'
import { addressToPublicKeyBytes } from './address-to-public-key-bytes'

export async function addressToCryptoKey(address: Address): Promise<CryptoKey> {
  const bytes = await addressToPublicKeyBytes(address)

  return crypto.subtle.importKey('raw', bytes, 'Ed25519', true, ['verify'])
}