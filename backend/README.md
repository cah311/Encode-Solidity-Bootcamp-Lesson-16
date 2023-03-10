# From Lesson 14 - Minting tokens in the backend

## NestJS Framework

- Running services with node
- Web server with node
- Using Express to run a node web server
- About using frameworks
- Using NestJS framework
- Overview of a NestJS project
- Using the CLI
- Initializing a project with NestJS
- Swagger plugin

### References

<https://nodejs.org/en/docs/guides/getting-started-guide/>

<https://devdocs.io/express-getting-started/>

<https://docs.nestjs.com/>

<https://github.com/brocoders/nestjs-boilerplate>

<https://docs.nestjs.com/openapi/introduction>

## Implementing the API

- The NestJS CLI
- Creating Resources
- Controllers, Services and Routes in NestJS
- Modules and injections (overview)
- Server configuration
- Serving scripts as services
- Params, DTOs and Payloads
- HTTP errors and messages
- (Review) Environment
- Implementing the features

### References

<https://docs.nestjs.com/cli/overview>

<https://docs.nestjs.com/recipes/crud-generator>

## Read-only data

- GET methods:
  - Query contract address
  - Query total supply
  - Query allowance from a given address to another address
  - Query transaction status by transaction hash
  - Query transaction receipt of a transaction by transaction hash

## Sending tokens

- GET methods:
  - View list of payment orders
  - View payment order by id
- POST methods:
  - Create a payment order using secret
  - Request a payment order by passing id and secret
    - Contract is called using an address with the role of minter to pay out the tokens

---

## Homework

- Create Github Issues with your questions about this lesson
- Read the references
