# Lesson 16 - Integration

## Implementing the dApp using Angular (review)

- Creating the project
- Modules
- Generating a wallet and storing at memory on page load
- Reading blockchain data on page load
- Displaying values in HTML using Angular directives
- Reactive features in the page
- Button actions and events
- Improving the page visuals with bootstrap

### References

<https://angular.io/cli>

<https://angular.io/guide/reactive-forms>

## Coupling frontend and APIs

- On-chain and off-chain features
- Keeping user Private Key private
- Authentication methods
- Using signatures as a form of authentication
- Mapping interactions, resources and payloads
- Handling errors

### References

<https://en.wikipedia.org/wiki/Loose_coupling>

<https://angular.io/guide/http>

## CORS settings (if needed)

- Cross-origin resource sharing
- Allow origin errors

### Code reference

```
  const corsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    allowedHeaders: 'Content-Type, Accept, Authorization',
  };
```

### References

<https://docs.nestjs.com/security/cors>

<https://github.com/expressjs/cors#configuration-options>

## Auth methods for the Web3.0

- Consuming services from API
- Authentication and authorization
- Elliptic encryption
- Signing messages
- Message signature in body
- Verifying signatures

### References

<https://en.wikipedia.org/wiki/Authentication_protocol>

<https://dev.to/lparvinsmith/signatures-as-authentication-in-web3-3kod>

<https://docs.ethers.io/v5/api/signer/#Signer-signMessage>

<https://docs.ethers.io/v5/api/utils/signing-key/#utils-verifyMessage>

## Voting dApp integration guidelines

- Single POST method:
  - Request voting tokens from API passing my address
  - (Optional) Pass data and signature as well
- Use these tokens to interact with the tokenized ballot
- All other interactions must be made directly on-chain

---

## Homework

- Create Github Issues with your questions about this lesson
- Finish the integration

---

## Weekend Project

- Form groups of 3 to 5 students
- Complete the projects together
- Create a voting dApp to cast votes, delegate and query results on chain
- Request voting tokens to be minted using the API
- (bonus) Store a list of recent votes in the backend and display that on frontend
