const initialState = {
  messages: "Use 'e' to pick up eggs and 'q' to talk to people!"
}

const dashboardReducer = (state = initialState, action ) => {
  switch(action.type) {
    case 'UPLOAD_MESSAGE':
      return {
        ...action.payload
      }
    default:
      return state
  }
}

export default dashboardReducer
