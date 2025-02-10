import { SolanaAuthInstance } from '../src/solana-auth-instance'
import { getAddressFromPublicKey, getBase58Decoder, getUtf8Encoder, signBytes } from '@solana/web3.js'
import { SolanaAuthMessage, SolanaAuthMessageSigned } from '../src'
import { getKeypairFromFile } from './test-helpers'
import pico from 'picocolors'

/**
 * This is a test helper that implements the participant role for Alice
 */
export async function testParticipantAlice({ solanaAuth }: { solanaAuth: SolanaAuthInstance }) {
  function log(message: string, params: any[] = []) {
    console.log(pico.magenta(`[ALICE] ${message}`), ...params)
  }

  const aliceKeyPair = await getKeypairFromFile(`${process.cwd()}/fixtures/keypair-alice.json`)
  const aliceAddress = await getAddressFromPublicKey(aliceKeyPair.publicKey)

  return {
    address: aliceAddress,
    log,
    signIn: async (payload: SolanaAuthMessage): Promise<SolanaAuthMessageSigned> => {
      // TODO: Implement this to sign the message using Alice's keypair
      log(pico.yellow(`WARNING [ALICE] SIGN IN NOT IMPLEMENTED`))
      log('Signing message')

      return {
        ...payload,
        signature: 'todo',
      }
    },
    signMessage: async (payload: SolanaAuthMessage): Promise<SolanaAuthMessageSigned> => {
      log('Signing message')

      const message = getUtf8Encoder().encode(payload.message.text)
      const signedBytes = await signBytes(aliceKeyPair.privateKey, message)
      const signature = getBase58Decoder().decode(signedBytes)

      return {
        ...payload,
        signature,
      }
    },
    signOffline: async (payload: SolanaAuthMessage): Promise<SolanaAuthMessageSigned> => {
      log(pico.yellow(`WARNING [ALICE] SIGN OFFLINE NOT IMPLEMENTED`))
      log('Sign offline')

      return {
        ...payload,
        signature: 'todo',
      }
    },
    signTransaction: async (payload: SolanaAuthMessage): Promise<SolanaAuthMessageSigned> => {
      log(pico.yellow(`WARNING [ALICE] SIGN TRANSACTION NOT IMPLEMENTED`))
      log('Sign transaction')

      return {
        ...payload,
        signature: 'todo',
      }
    },
  }
}
