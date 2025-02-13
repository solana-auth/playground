import { SolanaAuthMessageSigned } from '../../solana-auth-message'
import { SolanaClient } from '../../solana-client'
import { address, getBase58Encoder, getTransactionDecoder, verifySignature } from '@solana/web3.js'
import { getPublicKeyFromAddress } from '../../utils'

export async function solanaSignTransactionVerify(client: SolanaClient, options: SolanaAuthMessageSigned) {
  const publicKey = address(options.publicKey)
  const base58Transaction = options.signature
  const transactionBytes = getBase58Encoder().encode(base58Transaction)
  const transaction = getTransactionDecoder().decode(transactionBytes)
  const signatureBytes = transaction.signatures[publicKey]
  if (!signatureBytes) {
    throw new Error(`Signature not found for ${publicKey}`)
  }

  const cryptoKey = await getPublicKeyFromAddress(publicKey, true)
  const verified = await verifySignature(cryptoKey, signatureBytes, transaction.messageBytes)

  return await verifySignature(cryptoKey, signatureBytes, transaction.messageBytes)
}
