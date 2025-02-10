import { SolanaClient } from './solana-client'

// TODO: This should be internal to the rpc plugin
export async function getLatestBlockhash(client: SolanaClient) {
  return client.rpc
    .getLatestBlockhash()
    .send()
    .then((response) => response.value.blockhash.toString())
    .catch((error) => {
      console.error(`Error running getLatestBlockhash:`, error)
      throw `Error getting latest blockhash: ${error}`
    })
}
