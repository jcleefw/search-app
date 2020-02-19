import * as Api from './api'
const reducerMock = jest.mock('../store/reducer')

describe('api', () => {
  const reducer = jest.fn()

  let mockData = {
    results: ['hello', 'world'],
  }

  let mockFetch

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('fetchData successfully with more than 1 results returned', async () => {
    mockData = {
      results: ['hello', 'world'],
    }
    const expectedResults = {
      emptyResults: false,
      searchResults: mockData.results,
      type: 'dispatchType',
    }

    mockFetch = jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => mockData,
      })
    )

    await Api.fetchData('/blach', reducer, 'dispatchType')
    expect(mockFetch).toHaveBeenCalledTimes(1)
    expect(reducer).toHaveBeenLastCalledWith(expectedResults)
  })

  it('fetchData successfully with no results returned', async () => {
    mockData = {
      results: [],
    }
    const expectedResults = {
      emptyResults: true,
      searchResults: [],
      type: 'dispatchType',
    }

    mockFetch = jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => mockData,
      })
    )

    await Api.fetchData('/blach', reducer, 'dispatchType')
    expect(mockFetch).toHaveBeenCalledTimes(1)
    expect(reducer).toHaveBeenLastCalledWith(expectedResults)
  })

  it('fetchData failed', async () => {
    let mockData = {
      message: 'not found',
    }
    let expectedResults = {
      searchErrors: 'not found',
      type: 'SET_SEARCH_ERRORS',
    }

    mockFetch = jest.spyOn(global, 'fetch').mockRejectedValue(mockData)

    let data = await Api.fetchData('/blach', reducer)
    expect(mockFetch).toHaveBeenCalledTimes(1)
    expect(reducer).toHaveBeenLastCalledWith(expectedResults)
  })
})
