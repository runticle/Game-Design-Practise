const initialState = {
  shopInventory: [],
  shopVisibility: 'none'
}

const shopReducer = (state = initialState, action ) => {
  switch(action.type) {
    case 'SHOW_STORE':
      return { ...state, shopVisibility: action.payload.shopVisibility }
    case 'STOCK_SHOP':
      return { ...state, shopInventory: action.payload.shopInventory }
    default:
      return state
  }
}

export default shopReducer
