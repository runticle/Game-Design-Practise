import store from '../../config/store'
import { getInteractablePositions, notOnEdgeOfMap, observeCollect, dispatchMessage, dispatchUpdatedTiles, dispatchAddToInventory} from './interaction_functions'

export default function handleInteract(map) {

  function attemptDig() {
    const pos = store.getState().player.position

    if(observeCollect(0)) {
        dispatchAddToInventory(11)
        dispatchUpdatedTiles(pos)
      }
  }

  function observeInteract(pos) {
    const tiles = store.getState().map.tiles
    const interactablePos = getInteractablePositions(pos)

    var interactable = function(pos) {
      const tile = tiles[pos[0]][pos[1]]

      if(tile === 7) {
        dispatchMessage(2)
      }
      if(tile === 8) {
        dispatchMessage(3)
        dispatchAddToInventory(10)
      }
    }
    return interactablePos.some(interactable)
  }

  function attemptInteract() {
    const pos = store.getState().player.position

    if(!notOnEdgeOfMap(pos))
      observeInteract(pos)
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
