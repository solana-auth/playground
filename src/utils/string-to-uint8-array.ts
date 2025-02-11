import { getUtf8Encoder, ReadonlyUint8Array } from '@solana/web3.js'

export function stringToReadonlyUint8Array(str: string): ReadonlyUint8Array {
  return getUtf8Encoder().encode(str)
}
