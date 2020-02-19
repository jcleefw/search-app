import reducer from './reducer'

describe('reducer', () => {
  let searchResults = []

  describe('SET_SEARCH_RESULTS', () => {
    let expectedResults = {
      searchResults: [1, 2, 3],
      searchErrors: {},
      emptyResults: false,
    }

    const action = {
      type: 'SET_SEARCH_RESULTS',
      searchResults: [1, 2, 3],
      emptyResults: false,
    }
    it('sets search results', () => {
      expect(reducer('SET_SEARCH_RESULTS', action)).toEqual(expectedResults)
    })
  })

  describe('UPDATE_SEARCH_RESULTS', () => {
    let expectedResults = {
      searchResults: [1, 2, 3],
      searchErrors: {},
      emptyResults: 'blah',
    }

    const action = {
      type: 'UPDATE_SEARCH_RESULTS',
      searchResults: [1, 2, 3],
      emptyResults: 'blah',
    }

    it('updates the value', () => {
      expect(reducer('UPDATE_SEARCH_RESULTS', action)).toEqual(expectedResults)
    })
  })

  describe('SET_SEARCH_ERRORS', () => {
    let expectedResults = {
      searchResults: undefined,
      searchErrors: 'i have errors',
      emptyResults: undefined,
    }

    const action = {
      type: 'SET_SEARCH_ERRORS',
      searchResults: [1, 2, 3],
      emptyResults: 'blah',
      searchErrors: 'i have errors',
    }

    it('updates only update the set errors values', () => {
      expect(reducer('SET_SEARCH_ERRORS', action)).toEqual(expectedResults)
    })
  })

  describe('unknown dispatch', () => {
    const action = {
      type: 'BLAH TYPE',
      searchResults: [1, 2, 3],
      emptyResults: 'blah',
    }

    it('updates the value', () => {
      expect(reducer('BLAH TYPE', action)).toEqual(initialState)
    })
  })
})
