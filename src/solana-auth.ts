import { SolanaAuthConfig } from './solana-auth-config'
import { SolanaAuthInstance } from './solana-auth-instance'
import { SolanaAuthMessageCreateOptions, SolanaAuthMessageSigned } from './solana-auth-message'
import { solanaAuthMethodCreate } from './methods/solana-auth-method-create'
import { solanaAuthMethodVerify } from './methods/solana-auth-method-verify'

export function createSolanaAuth(config: SolanaAuthConfig): SolanaAuthInstance {
  return {
    createMessage: async (options: SolanaAuthMessageCreateOptions) => {
      return await solanaAuthMethodCreate(config.client, options)
    },
    verifyMessage: async (options: SolanaAuthMessageSigned) => {
      return await solanaAuthMethodVerify(config.client, options)
    },
  }
}
