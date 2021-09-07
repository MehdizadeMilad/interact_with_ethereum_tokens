# This was a little project as a proof of ability to interact with Blockchai networks

**Task description**:
~~~~
You would need to create simple backend service that has one GrapQL query and one mutation and js
script.
Backend service:
1. Query should take wallet address as a parameter and return the balance of LSS tokens in that
wallet.
2. Mutation should take three arguments: message (any string), wallet address and signature. Then
it should validate if the provided address matches the one recovered from the signature and the
message.
JS Script:
Script should generate the signature for the provided message and private key
~~~~

- Infura used as the Gateway to connect to Ethereum mainnet
- `docs` contains Postman collection
- `jsScript` contains client side logic 
- `backend` contains **the integration** part

---
## to start Backend server:
` npm ci `
then 
`npm run start`