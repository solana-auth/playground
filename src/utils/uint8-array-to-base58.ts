import { getBase58Decoder } from '@solana/web3.js'

export function uint8ArrayToBase58(bytes: Uint8Array): string {
  return getBase58Decoder().decode(bytes)
}