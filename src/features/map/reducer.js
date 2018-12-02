import { tiles } from '../../data/maps/1'

const initialState = {
  tiles: tiles
}

const mapReducer = (state = initialState, action ) => {
  switch(action.type) {
    case 'ADD_TILES':
      return {
        ...action.payload
      }
    case 'UPDATE_TILES':
      return {
        ...action.payload
      }
    default:
      return state
  }
}

export default mapReducer
