import {
  assertIsAddress,
  assertIsSignature,
  getBase58Encoder,
  getUtf8Encoder,
  SignatureBytes,
  verifySignature,
} from '@solana/web3.js'
import { SolanaAuthMessageSigned } from '../../solana-auth-message'
import { SolanaClient } from '../../solana-client'

export async function solanaSignMessageVerify(client: SolanaClient, options: SolanaAuthMessageSigned) {
  assertIsSignature(options.signature)
  assertIsAddress(options.publicKey)

  const signature = options.signature
  const signatureBytes = getBase58Encoder().encode(signature)
  const publicKey = options.publicKey

  const publicKeyBytes = await crypto.subtle
    .importKey('raw', Uint8Array.from(getBase58Encoder().encode(publicKey)), { name: 'Ed25519' }, true, ['verify'])
    .then((key) => crypto.subtle.exportKey('raw', key))

  const cryptoKey = await crypto.subtle.importKey('raw', publicKeyBytes, 'Ed25519', true, ['verify'])

  const message = getUtf8Encoder().encode(options.message.text)
  const verified = await verifySignature(cryptoKey, signatureBytes as SignatureBytes, message)

  if (!verified) {
    throw new Error('solanaSignMessageVerify: Invalid signature')
  }
  return publicKey
}
