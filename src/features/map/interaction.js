import store from '../../config/store'
import { SPRITE_SIZE } from '../../config/constants'

export default function handleInteraction(map) {

  function dispatchInteraction(pos) {
    const state = store.getState()
    const tiles = state.map.tiles
    alert("You found a egg!")
    store.dispatch ({
      type: 'UPDATE_TILES',
      payload: {
        tiles: getNewMap(tiles, pos) //updates store but map doesn't rerender
      }
    })
  }

  function getNewMap(tiles, pos) {
    const y = pos[1] / SPRITE_SIZE
    const x = pos[0] / SPRITE_SIZE
    return tiles.map((row, index) => {
      if(index != y) { return row }
      return row.map((tile, index) => {
        if(index != x) { return tile }
        return 0
      })
    })
  }

  function observeInteraction(pos) {
    const tiles = store.getState().map.tiles
    const y = pos[1] / SPRITE_SIZE
    const x = pos[0] / SPRITE_SIZE
    const tile = tiles[y][x]
    return tile === 2
  }

  function attemptInteraction() {
    const pos = store.getState().player.position

    if(observeInteraction(pos))
      dispatchInteraction(pos)

  }

  function handleKeydown(e) {
    e.preventDefault()

    switch(e.keyCode) {
      case 69:
        return attemptInteraction()

      default:
        console.log(e.keyCode)
    }
  }

  window.addEventListener('keydown', (e) => {
    handleKeydown(e)
  })

  return map
}
