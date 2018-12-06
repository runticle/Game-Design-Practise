import shopReducer from '../features/shop/reducer'

describe ('shop reducer', () => {

  it('should return the initial state', () => {
    expect((shopReducer(undefined, {}))).toEqual (
      {
        shopInventory: [],
        shopVisibility: 'none'
      }
    )
  })

})
