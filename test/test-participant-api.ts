import { SolanaAuthInstance } from '../src/solana-auth-instance'
import { SolanaAuthMessageCreateOptions, SolanaAuthMessageSigned } from '../src'
import pico from 'picocolors'

/**
 * This is a test helper that implements the participant role for the API
 */
export async function testParticipantApi({ solanaAuth }: { solanaAuth: SolanaAuthInstance }) {
  function log(message: string, params: any[] = []) {
    console.log(pico.cyan(`[ API ] ${message}`), ...params)
  }

  // Here we store the nonce's for each public key
  const nonceStore: Record<string, string> = {}

  return {
    log,
    createMessage: async (input: SolanaAuthMessageCreateOptions) => {
      if (nonceStore[input.publicKey]) {
        log(pico.yellow(`Nonce already exists for public key: ${input.publicKey}, removing it...`))
        delete nonceStore[input.publicKey]
      }
      const created = await solanaAuth.createMessage(input)
      nonceStore[input.publicKey] = created.nonce
      log(`Creating message for public key: ${input.publicKey} with nonce: ${created.nonce}`)
      return created
    },
    verifyMessage: async (input: SolanaAuthMessageSigned) => {
      if (!nonceStore[input.publicKey]) {
        log(pico.red(`Nonce not found for public key: ${input.publicKey}`))
        throw 'Nonce not found'
      }
      log(`Verifying message for public key: ${input.publicKey}`)
      const verified = await solanaAuth.verifyMessage(input)
      // Remove the nonce from the nonce store
      delete nonceStore[input.publicKey]
      return verified
    },
  }
}
