import { SolanaAuthMessage, SolanaAuthMessageCreateOptions, SolanaAuthMessageSigned } from './solana-auth-message'

// Public methods that are exposed by the SolanaAuth instance.
export interface SolanaAuthInstance {
  // Create a verification message for a user to sign.
  createMessage(options: SolanaAuthMessageCreateOptions): Promise<SolanaAuthMessage>

  // Verify the message signed by a user.
  verifyMessage(options: SolanaAuthMessageSigned): Promise<string>
}
