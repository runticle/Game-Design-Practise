const initialState = {
  shopInventory: [],
  shopVisibility: 'none'
}

const shopReducer = (state = initialState, action ) => {
  switch(action.type) {
    case 'SHOW_STORE':
      return { ...state, shopVisibility: action.payload.shopVisibility }
    case 'STOCK_SHOP':
      const newItem = action.payload.shopInventory
      return { ...state, shopInventory: state.shopInventory.concat(newItem) }
    default:
      return state
  }
}

export default shopReducer
