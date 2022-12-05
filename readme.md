# Word-Validator

Checks For Word Validity by running an API Request in Backend.

### To DO's:
- Add API Caching using React.

## Development Setup

- Back-End Setup:

1. Set environment Variables as .env.example
2. `npm install`
3. Run `npm run dev` to start server at <http://localhost:8000> .

- Front-End Setup:

1. `npm install`
2. `npm start` to run frontend at <http://localhost:3000>

## Production Setup

1. Run `docker build  --no-cache -t scyther37/word-search:v1 .`
2. Run `docker push scyther37/word-search:v1`
3. Run Docker Container by using <br>`docker run --env-file .env -p 8000:8000 -d scyther37/word-search:v1`
