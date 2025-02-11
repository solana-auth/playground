import { Address } from '@solana/web3.js'
import { base58ToReadonlyUint8Array } from './base58-to-readonly-uint8-array'

export async function addressToPublicKeyBytes(address: Address): Promise<ArrayBuffer> {
  return crypto.subtle
    .importKey('raw', Uint8Array.from(base58ToReadonlyUint8Array(address)), { name: 'Ed25519' }, true, ['verify'])
    .then((key) => crypto.subtle.exportKey('raw', key))
}