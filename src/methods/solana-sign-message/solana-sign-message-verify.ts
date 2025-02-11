import { assertIsAddress, assertIsSignature, SignatureBytes, verifySignature } from '@solana/web3.js'
import { SolanaAuthMessageSigned } from '../../solana-auth-message'
import { SolanaClient } from '../../solana-client'
import { addressToCryptoKey, base58ToReadonlyUint8Array, stringToReadonlyUint8Array } from '../../utils'

export async function solanaSignMessageVerify(client: SolanaClient, options: SolanaAuthMessageSigned) {
  assertIsSignature(options.signature)
  assertIsAddress(options.publicKey)

  const signature = options.signature
  const publicKey = options.publicKey

  const signatureBytes = base58ToReadonlyUint8Array(signature)
  const cryptoKey = await addressToCryptoKey(publicKey)

  const message = stringToReadonlyUint8Array(options.message.text)
  const verified = await verifySignature(cryptoKey, signatureBytes as SignatureBytes, message)

  if (!verified) {
    throw new Error('solanaSignMessageVerify: Invalid signature')
  }
  return publicKey
}
