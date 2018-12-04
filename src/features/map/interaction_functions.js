import { SPRITE_SIZE } from '../../config/constants'
import store from '../../config/store'

export function getNewMap(itemPos, newSpriteIndex) {
  const tiles = store.getState().map.tiles
  //get item position x / y
  const y = itemPos[1] / SPRITE_SIZE
  const x = itemPos[0] / SPRITE_SIZE

  return tiles.map((row, index) => {
    if(index !== y) { return row }
    return row.map((tile, index) => {
      if(index !== x) { return tile }
      return newSpriteIndex
    })
  })
}

export function observeCollect(itemIndex) {
  const tiles = store.getState().map.tiles
  const pos = store.getState().player.position

  const y = pos[1] / SPRITE_SIZE
  const x = pos[0] / SPRITE_SIZE
  const tile = tiles[y][x]
  return tile === itemIndex
}

export function notOnEdgeOfMap(pos) {
  return(pos[1] / SPRITE_SIZE === 0 ||
          pos[1] / SPRITE_SIZE === 11 ||
          pos[0] / SPRITE_SIZE === 0 ||
          pos[0] / SPRITE_SIZE === 19)

}

export function getInteractablePositions(pos) {
  const xPos = pos[0] / SPRITE_SIZE
  const yPos = pos[1] / SPRITE_SIZE
  return [
    [yPos, xPos],
    [yPos + 1, xPos],
    [yPos, xPos + 1],
    [yPos - 1, xPos],
    [yPos, xPos - 1],
  ]
}




// REDUCER CALLS

export function dispatchUpdatedTiles(itemPos, newSpriteIndex) {
  store.dispatch ({
    type: 'UPDATE_TILES',
    payload: {
      tiles: getNewMap(itemPos, newSpriteIndex)
    }
  })
}

export function dispatchMessage(messageIndex) {
  store.dispatch ({
    type: 'SET_MESSAGE',
    payload: {
      messageIndex: messageIndex
    }
  })
}

export function dispatchAddToInventory(itemIndex) {
  store.dispatch ({
    type: 'SEND_TO_INVENTORY',
    payload: {
      inventory: itemIndex
    }
  })
}
