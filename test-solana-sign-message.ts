import { createSolanaAuth, createSolanaClient, SolanaAuthConfig } from './src'

const client = createSolanaClient({
  rpc: 'https://api.devnet.solana.com',
})

const solanaAuthConfig: SolanaAuthConfig = {
  client,
  methods: [
    // Indicates the methods that the instance will support.
    'solana:signMessage',
  ],
}

console.log(`Solana Auth - Sign Message`)

const solanaAuth = createSolanaAuth(solanaAuthConfig)

if (!solanaAuth) {
  throw new Error('Solana Auth not initialized')
}

console.log(`Step 1. [WEB] User wants to verify a public key`)
console.log(`Step 2. [API] Creates a verification message`)
console.log(`Step 3. [WEB] User signs the verification message`)
console.log(`Step 4. [API] Verifies the signed message`)
