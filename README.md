# Express Middleware

This repo is a small API that contains the following routes:

`GET /` - Should Return the string "hello World!", along with a `200` status code

`GET /jokes` - Should return an array of all jokes

`POST /jokes` - Accepts the following body:

```json
{
    "name": string,
    "content": string
}
```

Should add a new joke to the database and return a `201` status code. This endpoint may need some middleware adding to allow the reading of the request body...

## Middleware challenges

The following functionality has not been built into the application. You will need to use middleware to acheive the following:

- ALL requests should be logged when received. [Morgan](https://expressjs.com/en/resources/middleware/morgan.html) may be useful for this.

- CORS should be enabled only on the `/` endpoint.

- If a client visits `/hello.html`, they should be served a html file displaying the text "This is an Express Server!"

- Any `/jokes` routes require the request to contain an `Authorization` header containing the string "supersecret". If not present, or if the string is not correct, the server should return a `401` status code.

- ALL endpoints should use [helmet](https://helmetjs.github.io/) to improve security on the endpoints.

## Setup

### Database

To set the database up, run the following command to build the docker image defined in the repo:

```bash
docker build . -t mcr-codes/express-middleware
```

**On an M1 Mac** - run the following:

```bash
docker build -f Dockerfile.m1 . -t mcr-codes/express-middleware
```

To build the image, run:

```bash
docker run -d -p 3307:3306 --name express-middleware  mcr-codes/express-middleware
```

### Environment variables

Create a `.env` file in the root of the repo with the following values:

```properties
PORT=3000
DB_NAME=express-middleware
DB_USER=user
DB_PASSWORD=password
DB_HOST=localhost
DB_PORT=3307
```

This contains credentials to allow a connection to the database.
