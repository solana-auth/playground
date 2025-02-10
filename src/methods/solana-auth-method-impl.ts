import { SolanaAuthMethod } from '../solana-auth-methods'
import { SolanaClient } from '../solana-client'
import { SolanaAuthMessageCreateOptions, SolanaAuthMessageSigned } from '../solana-auth'
import { SolanaAuthMessage } from '../solana-auth-message'

export interface SolanaAuthMethodImpl {
  method: SolanaAuthMethod
  create: (client: SolanaClient, options: SolanaAuthMessageCreateOptions) => Promise<SolanaAuthMessage>
  verify: (client: SolanaClient, options: SolanaAuthMessageSigned) => Promise<string>
}
