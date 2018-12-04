const initialState = {
  messageIndex: 0,
  inventory: [],
  rubies: 0
}

const dashboardReducer = (state = initialState, action ) => {
  switch(action.type) {
    case 'SET_MESSAGE':
        const newMsgIndex = action.payload.messageIndex
        return { ...state, messageIndex: newMsgIndex }
    case 'SEND_TO_INVENTORY':
        const newInv = action.payload.inventory
        return { ...state, inventory: state.inventory.concat(newInv) }
    case 'ADD_RUBY':
        return { ...state, rubies: state.rubies + 1 }
    default:
      return state
  }
}

export default dashboardReducer
