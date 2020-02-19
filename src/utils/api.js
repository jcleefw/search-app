const BASE_URL = 'http://localhost:5000'

export async function fetchData(url, dispatch, dispatchType) {
  let errorMessage = {}
  return fetch(`${BASE_URL}${url}`)
    .then(response => {
      if (!response.ok) {
        errorMessage = {
          status: response.status,
          statusText: response.statusText,
        }
      }

      return response
    })
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
    .catch(err =>
      dispatch({ type: 'SET_SEARCH_ERRORS', searchErrors: errorMessage })
    )
}
