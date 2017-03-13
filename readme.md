# fetch-request-wrapper (A Fetch Wrapper for ES6/ES7)

Fetch wrapper utilizing Async/Await. Returns an object with GET, POST, PUT, DELETE.

- Each function call takes a `route`, and an options object called `parameters` (ex. parameters = { body: { found: true } })
- Requests like POST will have a key in parameters called `body`, which will be stringified
- GET requests have an optional third argument, `queryParams` that will be attached to the end of the route

## How to install

- Clone/download this repo or run `npm install --save fetch-request-wrapper`

## How to use

- `const {get, post, put, delete} from 'fetch-request-wrapper'`
- `get('https://api.github.com/gists/public').then(result => console.log(result))` 
- `post(url, { body: { name: 'Sally' } }).then(result => console.log(result))`
