// export const url = /* add your url here */

// @param replayState : boolean, adds token to body
export const makeParams = (method, body, replayState) => {
  let token = localStorage.getItem('token')
  let params = {
    method,
    headers: {
      'Content-Type': 'application/json',
    }
  }

  if (replayState){
    params.headers['x-access-token'] = body
    return params
  }
  else if(body){
    params.body = JSON.stringify(body)
  }

  if (token) { params.headers['x-access-token'] = token }

  return params
}

const attemptFetch = async (route, params, queryParam = '') => {
  try {
    let response = await fetch(`${url}${route}/${queryParam}`, params)
    let body = await response.json()
    return body
  } catch (error) {
    console.error('error fetching: ', error)
  }
}
// ********** FETCH POST ************

const fetchPost = (route, parameters) => {
  const params = makeParams('POST', parameters)
  return attemptFetch(route, params)
}

// ********** FETCH GET ************

const fetchGet = (route, parameters = '') => {
  const params = makeParams('GET')
  return attemptFetch(route, params, parameters)
}

// ********** FETCH PUT ************

const fetchPut = (route, parameters) => {
  const params = makeParams('PUT', parameters)
  return attemptFetch(route, params)
}

// ********** FETCH DELETE ************

const fetchDelete = (route, parameters) => {
  const params = makeParams('DELETE', parameters)
  return attemptFetch(route, params)
}


// export all fetches as object
const Fetcher = {
  get: fetchGet,
  post: fetchPost,
  put: fetchPut,
  delete: fetchDelete
}

export default Fetcher