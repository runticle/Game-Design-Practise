import store from '../../config/store'
import { SPRITE_SIZE } from '../../config/constants'

export default function handleCollect(map) {

  function dispatchCollect(pos) {
    const state = store.getState()
    const tiles = state.map.tiles

    //set success message
    store.dispatch ({
      type: 'SET_MESSAGE',
      payload: {
        messageIndex: 1
      }
    })
    //update map without item
    store.dispatch ({
      type: 'UPDATE_TILES',
      payload: {
        tiles: getNewMap(tiles, pos)
      }
    })
    //add item to inventory
    store.dispatch ({
      type: 'SEND_TO_INVENTORY',
      payload: {
        inventory: 2
      }
    })
  }

  function getNewMap(tiles, pos) {
    const y = pos[1] / SPRITE_SIZE
    const x = pos[0] / SPRITE_SIZE
    return tiles.map((row, index) => {
      if(index !== y) { return row }
      return row.map((tile, index) => {
        if(index !== x) { return tile }
        return 0
      })
    })
  }

  function observeCollect(pos) {
    const tiles = store.getState().map.tiles
    const y = pos[1] / SPRITE_SIZE
    const x = pos[0] / SPRITE_SIZE
    const tile = tiles[y][x]
    return tile === 2
  }

  function attemptCollect() {
    const pos = store.getState().player.position

    if(observeCollect(pos))
      dispatchCollect(pos)

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
