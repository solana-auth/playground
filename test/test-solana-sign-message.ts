import { createSolanaAuth, createSolanaClient } from '../src'
import { SolanaAuthMethod } from '../src/solana-auth-methods'
import { testParticipantApi } from './test-participant-api'
import { testParticipantAlice } from './test-participant-alice'
import pico from 'picocolors'

console.log(pico.green(`Solana Auth - Sign Message`))

const method: SolanaAuthMethod = 'solana:signMessage'

const solanaAuth = createSolanaAuth({
  client: createSolanaClient({
    rpc: 'https://api.devnet.solana.com',
  }),
  methods: [method],
})

if (!solanaAuth) {
  throw new Error('Solana Auth not initialized')
}

const alice = await testParticipantAlice({ solanaAuth })
const api = await testParticipantApi({ solanaAuth })

// STEP 1 - Request verification of a public key
alice.log(`STEP 1. [WEB] Alice wants to verify a public key`)
alice.log(pico.gray(`Public Key: ${alice.address}`))

// STEP 2 - Create a verification message
api.log(`STEP 2. [API] Creates a verification message`)
const message = await api.createMessage({ method, publicKey: alice.address })
api.log(pico.gray(`Message: ${JSON.stringify(message, null, 2)}`))

// STEP 3 - Sign the verification message
alice.log(`STEP 3. [WEB] Alice signs the verification message`)
const signed = await alice.signMessage(message)
alice.log(pico.gray(`Signed: ${JSON.stringify(signed, null, 2)}`))

// STEP 4 - Verify the signed message
api.log(`STEP 4. [API] API verifies the signed message`)
const verified = await api.verifyMessage(signed)
api.log(pico.gray(`Verified: ${JSON.stringify(verified, null, 2)}`))
