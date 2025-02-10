import { solanaSignInVerify } from './solana-sign-in-verify'
import { SolanaAuthMethodImpl } from '../solana-auth-method-impl'
import { solanaSignInCreate } from './solana-sign-in-create'

export const solanaSignIn: SolanaAuthMethodImpl = {
  method: 'solana:signIn',
  create: solanaSignInCreate,
  verify: solanaSignInVerify,
}
