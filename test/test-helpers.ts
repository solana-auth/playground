import { createKeyPairFromBytes } from '@solana/web3.js'
import { readFileSync } from 'node:fs'

export function getKeypairFromFile(path: string) {
  const parsed = JSON.parse(readFileSync(path, 'utf-8'))
  const buffer = Uint8Array.from(parsed)

  return createKeyPairFromBytes(buffer, true)
}
