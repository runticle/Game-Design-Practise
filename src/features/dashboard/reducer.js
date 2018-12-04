const initialState = {
  messageIndex: 0,
  inventory: []
}

const dashboardReducer = (state = initialState, action ) => {
  switch(action.type) {
    case 'SET_MESSAGE':
        const newMsgIndex = action.payload.messageIndex
        return { ...state, messageIndex: newMsgIndex }
    case 'SEND_TO_INVENTORY':
        const newInv = action.payload.inventory
        return { ...state, inventory: state.inventory.concat(newInv) }
    default:
      return state
  }
}

export default dashboardReducer
