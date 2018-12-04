import store from '../../config/store'
import { notOnEdgeOfMap, dispatchStoreVisibility, getInteractablePositions, dispatchMessage } from '../map/interaction_functions'

export default function handleShopping(shop) {

  function observeInteract(pos) {
    const tiles = store.getState().map.tiles
    const interactablePos = getInteractablePositions(pos)

    var interactable = function(pos) {
      const tile = tiles[pos[0]][pos[1]]

      if(tile === 20) {
        dispatchMessage(4)
        dispatchStoreVisibility( '' )
      }

    }
    interactablePos.some(interactable)
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
      case 27:
        return dispatchStoreVisibility('none')
      default:
        return null
    }
  }

  window.addEventListener('keydown', (e) => {
    handleKeydown(e)
  })

  return shop
}
