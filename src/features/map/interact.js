import store from '../../config/store'
import { getInteractablePositions, attemptInteract, observeInteract, notOnEdgeOfMap, observeCollect, dispatchMessage, dispatchUpdatedTiles,dispatchAddRubies, dispatchAddToInventory} from './interaction_functions'

export default function handleInteract(map) {

  function playerHasSpade() {
    const inventory = store.getState().dashboard.inventory

    return inventory.includes(10)
  }

  function attemptDig() {
    const pos = store.getState().player.position

    if(observeCollect(0) && playerHasSpade()) {
        dispatchAddRubies()
        dispatchUpdatedTiles(pos, 1)
      }
  }

  function handleKeydown(e) {
    e.preventDefault()

    switch(e.keyCode) {
      case 81:
        return attemptInteract()
      case 87:
        return attemptDig()

      default:
        return null
    }
  }

  window.addEventListener('keydown', (e) => {
    handleKeydown(e)
  })

  return map
}
