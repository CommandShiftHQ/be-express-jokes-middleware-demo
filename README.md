# Express Middleware

This repo contains a demo to go with the [Express Middleware Backend Lecture](https://docs.google.com/presentation/d/1M-6BfaX7UftFdfzmueiHpdmBifGQXYA0NfbKIsKhYEE/edit#slide=id.g601c870f61_0_0).It is a small API that contains the following routes:

`GET /` - Should Return the string "hello World!", along with a `200` status code

`GET /jokes` - Should return an array of all jokes

`GET /randomJoke` - Should return a random joke from the available ones

`POST /jokes` - Accepts the following body:

```json
{
    "name": String,
    "content": String
}
```

Should add a new joke to the database and return a `201` status code. This endpoint may need some middleware adding to allow the reading of the request body...

## Middleware challenges

The following functionality has not been built into the application. You will need to use middleware to acheive the following:

- ALL requests should be logged when received. [Morgan](https://expressjs.com/en/resources/middleware/morgan.html) may be useful for this.

- CORS should be enabled only on the `/` endpoint. This would mean that only this endpoint would not be accessible in the browser.

- If a client visits `/hello.html`, they should be served a html file displaying the text "This is an Express Server!"

- Any `/jokes` routes require the request to contain an `Authorization` header containing the string "supersecret". If not present, or if the string is not correct, the server should return a `401` status code.

- ALL endpoints should use [helmet](https://helmetjs.github.io/) to improve security on the endpoints.

## Setup

## Install dependencies

To install required deps, run the following:

```bash
npm i
```

### Database

To set the database up, run the following command to build the docker image defined in the repo:

```bash
docker build . -t commanddshift/express-middleware
```

To build the image, run:

```bash
docker run -d -p 5435:5432 --name express-middleware -e POSTGRES_PASSWORD=password -d commanddshift/express-middleware
```

### Environment variables

Create a `.env` file in the root of the repo with the following values:

```properties
PGUSER=postgres
PGHOST=localhost
PGPASSWORD=password
PGDATABASE=middlewares
PGPORT=5435
PORT=3000
```

This contains credentials to allow a connection to the database.
