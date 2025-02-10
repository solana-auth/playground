import { SolanaClient } from '../../solana-client'
import { SolanaAuthMessage, SolanaAuthMessageCreateOptions } from '../../solana-auth-message'
import { getLatestBlockhash } from '../../solana-client-helpers'

export async function solanaSignMessageCreate(
  client: SolanaClient,
  options: SolanaAuthMessageCreateOptions,
): Promise<SolanaAuthMessage> {
  const blockhash = await getLatestBlockhash(client)

  return {
    publicKey: options.publicKey,
    method: options.method,
    blockhash,
    nonce: `Nonce ${Date.now()}`,
    message: {
      chain: 'solana:devnet',
      text: `This is the message to sign`,
    },
  }
}
