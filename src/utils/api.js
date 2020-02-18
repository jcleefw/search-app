const BASE_URL = 'http://localhost:5000'

export const fetchData = (url, setSuccess, setErrors) => {
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
    .then(data => setSuccess(data))
    .catch(err => setErrors({ err: errorMessage }))
}
