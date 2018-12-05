import store from '../config/store'
import { getNewMap } from './helpers'

export function dispatchStoreVisibility(status) {
  store.dispatch ({
    type: 'SHOW_STORE',
    payload: {
      shopVisibility: status
    }
  })
}

export function dispatchAddRubies() {
  store.dispatch ({
    type: 'ADD_RUBY',
    payload: {
      rubies: 1
    }
  })
}

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
