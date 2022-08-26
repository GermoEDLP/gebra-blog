## Descripcion

Blog backend develop in [Nest](https://github.com/nestjs/nest). Support in [TypeORM](https://typeorm.io/), document with [Swagger](https://swagger.io/), testing with [Jest](https://jestjs.io/) and contain on [Docker](https://www.docker.com/).

## Tools
- [Nest](https://docs.nestjs.com/): 8.0.0
- [Mongoose](https://typeorm.io/): 6.5.3
  - [MonogDB](https://www.mongodb.com/products/cloud-mongodb): 3.7.3
- [Swagger](https://swagger.io/): 3.0.0 (con [SwaggerUI](https://swagger.io/docs/specification/api-client-generator/ui-for-apps/): 4.3.0)
- [Jest](https://jestjs.io/): 27.2.5
- [Docker](https://www.docker.com/)
  - [Docker Compose](https://docs.docker.com/compose/overview/)



## Instalation

```bash
$ npm install
```

## Running app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
