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

  it('should set store to visible', () => {
    expect((shopReducer(undefined,
      {
        type: 'SHOW_STORE',
        payload: {
          shopVisibility: ''
        }
      }
    ))).toEqual (
      {
        shopInventory: [],
        shopVisibility: ''
      }
    )
  })

  it('should add an item to the shop', () => {
    expect((shopReducer(undefined,
      {
        type: 'STOCK_SHOP',
        payload: {
          shopInventory: 10
        }
      }
    ))).toEqual (
      {
        shopInventory: [10],
        shopVisibility: 'none'
      }
    )
  })

})
