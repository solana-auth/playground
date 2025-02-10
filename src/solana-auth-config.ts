import { SolanaClient } from './solana-client'
import { SolanaAuthMethod } from './solana-auth-methods'

export interface SolanaAuthConfig {
  // The client to use for the instance.
  // TODO: This should be provided by the plugin. For now, we hardcode it to the new @solana/web3.js v2.
  client: SolanaClient
  // The methods that the instance will support.
  methods: SolanaAuthMethod[]
}
