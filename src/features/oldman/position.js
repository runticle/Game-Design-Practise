import { dispatchUpdatedTiles } from '../../actions/actions'
import { MAP_WIDTH, MAP_HEIGHT } from '../../config/constants'
import store from '../../config/store'

export function setPosition(oldman) {
  const x = store.getState().oldman.position[1]
  const y = store.getState().oldman.position[0]
  dispatchUpdatedTiles([y,x], 8)

  return oldman
}
