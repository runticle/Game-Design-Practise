import mapReducer from '../features/map/reducer'
import { tiles } from '../data/maps/1'
import { getNewMap } from '../actions/helpers'

const updatedTiles = [
  [2,2,5,2,2,6,20,6,6,0,6,6,6,6,6,6,6,6,6,0],
  [6,0,0,0,0,0,0,6,6,6,6,0,0,5,5,5,5,0,6,0],
  [0,0,6,6,6,0,0,5,5,5,0,5,5,5,0,0,0,0,0,0],
  [0,0,6,0,0,0,0,0,6,0,0,0,0,0,0,0,5,0,0,0],
  [0,0,5,0,0,0,0,0,0,0,5,6,0,0,0,7,0,0,0,0],
  [6,6,0,0,0,0,0,0,0,0,0,0,0,0,3,6,6,6,6,6],
  [6,6,0,5,0,0,0,0,0,6,6,6,6,6,3,6,6,6,6,6],
  [0,0,0,0,0,0,0,6,0,0,6,6,6,6,3,6,6,6,6,6],
  [6,6,6,6,0,0,6,6,0,0,0,6,6,5,0,0,0,0,0,0],
  [6,6,7,0,0,5,5,5,5,0,6,6,0,0,0,0,5,0,0,0],
  [0,6,6,3,5,5,5,5,8,0,0,6,6,6,0,0,5,2,0,0],
  [6,0,6,2,5,5,5,6,6,6,0,0,5,5,5,0,5,0,0,0]
]

describe ('map reducer', () => {

  it('should return the initial state', () => {
    expect((mapReducer(undefined, {}))).toEqual (
      {
        tiles: tiles
      }
    )
  })

  it('should return the default map', () => {
    expect((mapReducer(undefined,
      {
        type: 'UPDATE_TILES',
        payload: {
          tiles: tiles
        }
      }
    ))).toEqual (
      {
        tiles: tiles
      }
    )
  })

  it('should return the updated map', () => {
    expect((mapReducer(undefined,
      {
        type: 'UPDATE_TILES',
        payload: {
          tiles: updatedTiles
        }
      }
    ))).toEqual (
      {
        tiles: updatedTiles
      }
    )
  })

})
