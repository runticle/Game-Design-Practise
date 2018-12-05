import store from './src/config/store'

describe ('map reducer', () => {

  it('should return the initial state', () => {
    expect((mapReducer(undefined, {}))).toEqual (
      {
        tiles: tiles
      }
    )
  })

})
