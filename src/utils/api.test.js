import * as Api from './api'

describe('api', () => {
  const successFn = jest.fn()
  const errorFn = jest.fn()

  let mockData = {
    results: ['hello', 'world'],
  }

  let mockFetch

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('fetchData successfully', async () => {
    mockData = {
      results: ['hello', 'world'],
    }

    mockFetch = jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => mockData,
      })
    )

    await Api.fetchData('/blach', successFn, errorFn)
    expect(mockFetch).toHaveBeenCalledTimes(1)
    expect(successFn).toHaveBeenLastCalledWith(mockData)
    expect(errorFn).toHaveBeenCalledTimes(0)
  })

  it('fetchData failed', async () => {
    let mockData = {
      status: 404,
      statusText: 'Not Found',
    }
    mockFetch = jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        ok: false,
        ...mockData,
      })
    )

    let data = await Api.fetchData('/blach', successFn, errorFn)
    expect(mockFetch).toHaveBeenCalledTimes(1)
    expect(errorFn).toHaveBeenLastCalledWith({ err: mockData })
    expect(successFn).toHaveBeenCalledTimes(0)
  })
})
