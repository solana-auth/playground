import { solanaSignTransactionCreate } from './solana-sign-transaction-create'
import { solanaSignTransactionVerify } from './solana-sign-transaction-verify'
import { SolanaAuthMethodImpl } from '../solana-auth-method-impl'

export const solanaSignTransaction: SolanaAuthMethodImpl = {
  method: 'solana:signTransaction',
  create: solanaSignTransactionCreate,
  verify: solanaSignTransactionVerify,
}
