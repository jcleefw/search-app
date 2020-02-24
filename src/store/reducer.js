import initialState from './initialState'

const SET_SEARCH_RESULTS = 'SET_SEARCH_RESULTS'
const UPDATE_SEARCH_RESULTS = 'UPDATE_SEARCH_RESULTS'
const SET_SEARCH_ERRORS = 'SET_SEARCH_ERRORS'
const SET_SORT_ORDER = 'SET_SORT_ORDER'

const reducer = (state, action) => {
  switch (action.type) {
    case SET_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.searchResults,
        emptyResults: action.emptyResults,
      }
    case UPDATE_SEARCH_RESULTS:
      return {
        searchResults: action.searchResults,
        searchErrors: initialState.searchErrors,
        emptyResults: action.emptyResults,
      }
    case SET_SEARCH_ERRORS:
      return {
        searchResults: state.searchResults,
        searchErrors: action.searchErrors,
        emptyResults: state.emptyResults,
      }
    case SET_SORT_ORDER:
      return {
        ...state,
        sortOrder: action.sortOrder,
      }
    default:
      return initialState
  }
}

export default reducer
