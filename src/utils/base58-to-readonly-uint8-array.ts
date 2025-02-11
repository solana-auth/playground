import { getBase58Encoder, ReadonlyUint8Array } from '@solana/web3.js'

export function base58ToReadonlyUint8Array(base58: string): ReadonlyUint8Array {
  return getBase58Encoder().encode(base58)
}
