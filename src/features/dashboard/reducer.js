const initialState = {
  messageIndex: 0
}

const dashboardReducer = (state = initialState, action ) => {
  switch(action.type) {
    case 'SET_MESSAGE':
      return {
        ...action.payload
      }
    default:
      return state
  }
}

export default dashboardReducer
