import { SolanaClient } from '../../solana-client'
import { SolanaAuthMessage, SolanaAuthMessageCreateOptions } from '../../solana-auth-message'
import { getLatestBlockhash } from '../../solana-client-helpers'
import pico from 'picocolors'

export async function solanaSignTransactionCreate(
  client: SolanaClient,
  options: SolanaAuthMessageCreateOptions,
): Promise<SolanaAuthMessage> {
  // TODO: Implement.
  console.log(pico.yellow(`WARNING [solanaSignTransactionCreate] Not implemented`))
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
