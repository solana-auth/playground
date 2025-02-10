import { SolanaAuthMethod } from './solana-auth-methods'

export interface SolanaAuthMessage {
  method: SolanaAuthMethod
  publicKey: string
  blockhash: string
  nonce: string
  message: SolanaAuthMessagePayload
}

export interface SolanaAuthMessagePayload {
  chain: string
  text: string
  // TODO: Define the properties.
}

export interface SolanaAuthMessageSigned extends SolanaAuthMessage {
  signature: string
}

export interface SolanaAuthMessageCreateOptions {
  method: SolanaAuthMethod
  publicKey: string
  // TODO: Define the properties.
}
