import reducer from './reducer'
import initialState from './initialState'

describe('reducer', () => {
  describe('SET_SEARCH_RESULTS', () => {
    let expectedResults = {
      searchResults: [1, 2, 3],
      searchErrors: '',
      emptyResults: false,
    }

    const action = {
      type: 'SET_SEARCH_RESULTS',
      searchResults: [1, 2, 3],
      emptyResults: false,
    }
    it('sets search results', () => {
      expect(reducer(initialState, action)).toEqual(expectedResults)
    })
  })

  describe('UPDATE_SEARCH_RESULTS', () => {
    let expectedResults = {
      searchResults: [1, 2, 3],
      searchErrors: '',
      emptyResults: 'blah',
    }

    const action = {
      type: 'UPDATE_SEARCH_RESULTS',
      searchResults: [1, 2, 3],
      emptyResults: 'blah',
    }

    it('updates the value', () => {
      expect(reducer(initialState, action)).toEqual(expectedResults)
    })
  })

  describe('SET_SEARCH_ERRORS', () => {
    let expectedResults = {
      searchResults: [],
      searchErrors: 'i have errors',
      emptyResults: false,
    }

    const action = {
      type: 'SET_SEARCH_ERRORS',
      searchResults: [1, 2, 3],
      emptyResults: 'blah',
      searchErrors: 'i have errors',
    }

    it('updates only update the set errors values', () => {
      expect(reducer(initialState, action)).toEqual(expectedResults)
    })
  })

  describe('SET_SORT_ORDER', () => {
    let expectedResults = {
      ...initialState,
      sortOrder: 'desc',
    }

    const action = {
      type: 'SET_SORT_ORDER',
      sortOrder: 'desc',
    }

    it('updates only update the set errors values', () => {
      expect(reducer(initialState, action)).toEqual(expectedResults)
    })
  })

  describe('unknown dispatch', () => {
    const action = {
      type: 'BLAH TYPE',
      searchResults: [1, 2, 3],
      emptyResults: 'blah',
    }

    it('updates the value', () => {
      expect(reducer(initialState, action)).toEqual(initialState)
    })
  })
})
