import playerReducer from '../features/player/reducer'

describe ('map reducer', () => {

  it('should return the initial state', () => {
    expect((playerReducer(undefined, {}))).toEqual (
      {
        shopInventory: [],
        shopVisibility: 'none'
      }
    )
  })

})
