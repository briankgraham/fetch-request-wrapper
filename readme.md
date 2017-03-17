# fetch-request-wrapper (A Fetch Wrapper for ES6/ES7)

Fetch wrapper utilizing Async/Await. Returns an object with GET, POST, PUT, DELETE. Pull Requests Welcome!

Use most recent version! Earlier builds missed certain dependencies that may cause issues if you didn't have them in your build already.

- No more repeated code! Let's take what Fetch has already made simple even simpler. Make a request, and await your response. That's it.
- Each function call takes a `route`, and an options object called `parameters` (ex. parameters = { body: { found: true } })
- Each request will supply the HTTP Verb, no need to add it to the `parameters` object
- No need to JSON.stringify/parse: Requests like POST will have a key in `parameters` called `body`, which will be stringified, all responses are parsed as well
- As of now, it uses Content-Type `application/json`, will be more flexible in future releases

## How to install

- Clone/download this repo or run `npm install --save fetch-request-wrapper`

## How to use

- `const {get, post, put, delete} from 'fetch-request-wrapper'`
- `get('https://api.github.com/gists/public').then(result => console.log(result))` 
- `post(url, { body: { name: 'Sally' } }).then(result => console.log(result))`
