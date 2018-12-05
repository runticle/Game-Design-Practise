import store from '../../config/store'
import { observeCollect } from '../../actions/helpers'
import { dispatchAddToInventory, dispatchMessage, dispatchUpdatedTiles } from '../../actions/actions'
export default function handleCollect(map) {

  function attemptCollect() {
    const itemPos = store.getState().player.position

    if(observeCollect(2)) {
        dispatchUpdatedTiles(itemPos, 0)
        dispatchAddToInventory(2)
        dispatchMessage(1)
    }
  }

  function handleKeydown(e) {
    e.preventDefault()

    switch(e.keyCode) {
      case 69:
        return attemptCollect()

      default:
        return null
    }
  }

  window.addEventListener('keydown', (e) => {
    handleKeydown(e)
  })

  return map
}
