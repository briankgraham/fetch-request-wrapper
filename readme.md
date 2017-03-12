# Fetch Wrapper for ES6

Fetch wrapper utilizing Async/Await. Returns an object with GET, POST, PUT, DELETE.

- Each function call takes a `route`, and an object called `parameters`
- Requests like POST will have a key in parameters called `body`, which will be stringified
- GET requests have a third argument, `queryParams` that will be attached to the end of the route
