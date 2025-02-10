import { solanaSignIn } from './solana-sign-in'
import { solanaSignMessage } from './solana-sign-message'
import { solanaSignTransaction } from './solana-sign-transaction'
import { solanaSignOffline } from './solana-sign-offline'
import { SolanaClient } from '../solana-client'
import { SolanaAuthMessageSigned } from '../solana-auth-message'

export async function solanaAuthMethodVerify(client: SolanaClient, options: SolanaAuthMessageSigned) {
  switch (options.method) {
    case 'solana:signIn':
      return solanaSignIn.verify(client, options)
    case 'solana:signMessage':
      return solanaSignMessage.verify(client, options)
    case 'solana:signOffline':
      return solanaSignOffline.verify(client, options)
    case 'solana:signTransaction':
      return solanaSignTransaction.verify(client, options)
    default:
      throw `Method not supported: ${options.method}`
  }
}
