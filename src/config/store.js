// initilses react redux store
import { createStore, combineReducers } from 'redux'
import playerReducer from '../features/player/reducer'
import mapReducer from '../features/map/reducer'
import dashboardReducer from '../features/dashboard/reducer'
import shopReducer from '../features/shop/reducer'

const rootReducer = combineReducers({
  player: playerReducer,
  map: mapReducer,
  dashboard: dashboardReducer,
  shop: shopReducer
})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
