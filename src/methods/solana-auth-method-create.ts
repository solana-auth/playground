import { solanaSignIn } from './solana-sign-in'
import { solanaSignMessage } from './solana-sign-message'
import { solanaSignTransaction } from './solana-sign-transaction'
import { solanaSignOffline } from './solana-sign-offline'
import { SolanaClient } from '../solana-client'
import { SolanaAuthMessageCreateOptions } from '../solana-auth-message'

export function solanaAuthMethodCreate(client: SolanaClient, options: SolanaAuthMessageCreateOptions) {
  switch (options.method) {
    case 'solana:signIn':
      return solanaSignIn.create(client, options)
    case 'solana:signMessage':
      return solanaSignMessage.create(client, options)
    case 'solana:signOffline':
      return solanaSignOffline.create(client, options)
    case 'solana:signTransaction':
      return solanaSignTransaction.create(client, options)
    default:
      throw `Method not supported: ${options.method}`
  }
}
