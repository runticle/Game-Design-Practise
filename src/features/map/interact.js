import store from '../../config/store'
import { SPRITE_SIZE } from '../../config/constants'

export default function handleInteract(map) {

// not DRY !! dispatchCollect in collect.js
  function dispatchCollect() {
    // give axe to player
    store.dispatch({
      type: 'SEND_TO_INVENTORY',
      payload: {
        inventory: 10
      }
    })
  }

  function dispatchMessageIndex(index) {
    store.dispatch({
      type: 'SET_MESSAGE',
      payload: {
        messageIndex: index
    }})
  }

  function notOnEdgeOfMap(pos) {
    console.log(pos[1] / SPRITE_SIZE)
    return(pos[1] / SPRITE_SIZE === 0 ||
            pos[1] / SPRITE_SIZE === 11 ||
            pos[0] / SPRITE_SIZE === 0 ||
            pos[0] / SPRITE_SIZE === 19)

  }

  function observeInteract(pos) {
    const tiles = store.getState().map.tiles
    const xPos = pos[0] / SPRITE_SIZE
    const yPos = pos[1] / SPRITE_SIZE
    const interactablePos = [
      [yPos, xPos],
      [yPos + 1, xPos],
      [yPos, xPos + 1],
      [yPos - 1, xPos],
      [yPos, xPos - 1],
    ]
    var interactable = function(pos) {
      // if wizard man
      if(tiles[pos[0]][pos[1]] === 7) {
        dispatchMessageIndex(2)
      }
      // if old man
      if(tiles[pos[0]][pos[1]] === 8) {
        dispatchMessageIndex(3)
        dispatchCollect(10)
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

      default:
        return null
    }
  }

  window.addEventListener('keydown', (e) => {
    handleKeydown(e)
  })

  return map
}
