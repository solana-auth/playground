import { solanaSignOfflineCreate } from './solana-sign-offline-create'
import { solanaSignOfflineVerify } from './solana-sign-offline-verify'
import { SolanaAuthMethodImpl } from '../solana-auth-method-impl'

export const solanaSignOffline: SolanaAuthMethodImpl = {
  method: 'solana:signOffline',
  create: solanaSignOfflineCreate,
  verify: solanaSignOfflineVerify,
}
