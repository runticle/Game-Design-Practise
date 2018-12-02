import store from '../../config/store'
import { SPRITE_SIZE } from '../../config/constants'

export default function handleInteract(map) {

  function dispatchInteract(pos) {
      store.dispatch({ type: 'UPLOAD_MESSAGE', payload: {
        messages: "some of these trees aren't what they seem!"
      }
    })
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
      return tiles[pos[0]][pos[1]] === 7
    }
    return interactablePos.some(interactable)
  }

  function attemptInteract() {
    const pos = store.getState().player.position

    if(!notOnEdgeOfMap(pos) && observeInteract(pos))
      dispatchInteract(pos)

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
