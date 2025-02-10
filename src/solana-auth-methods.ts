export type SolanaAuthMethodSolanaSignIn = 'solana:signIn'
export type SolanaAuthMethodSolanaSignMessage = 'solana:signMessage'
export type SolanaAuthMethodSolanaSignOffline = 'solana:signOffline'
export type SolanaAuthMethodSolanaSignTransaction = 'solana:signTransaction'

export type SolanaAuthMethod =
  | SolanaAuthMethodSolanaSignIn
  | SolanaAuthMethodSolanaSignMessage
  | SolanaAuthMethodSolanaSignOffline
  | SolanaAuthMethodSolanaSignTransaction
