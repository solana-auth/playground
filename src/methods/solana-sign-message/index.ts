import { solanaSignMessageCreate } from './solana-sign-message-create'
import { solanaSignMessageVerify } from './solana-sign-message-verify'
import { SolanaAuthMethodImpl } from '../solana-auth-method-impl'

export const solanaSignMessage: SolanaAuthMethodImpl = {
  method: 'solana:signMessage',
  create: solanaSignMessageCreate,
  verify: solanaSignMessageVerify,
}
