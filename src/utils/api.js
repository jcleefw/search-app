const BASE_URL = 'http://localhost:5000'

export async function fetchData(url, dispatch, dispatchType) {
  return fetch(`${BASE_URL}${url}`)
    .then(res => res.json())
    .then(data => {
      if (data.results.length > 0)
        return dispatch({
          type: dispatchType,
          searchResults: data.results,
          emptyResults: false,
        })
      else
        return dispatch({
          type: dispatchType,
          emptyResults: true,
          searchResults: [],
        })
    })
    .catch(err => {
      return dispatch({ type: 'SET_SEARCH_ERRORS', searchErrors: err.message })
    })
}
