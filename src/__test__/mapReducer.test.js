import mapReducer from '../features/map/reducer'
import { tiles } from '../data/maps/1'

describe ('map reducer', () => {

  it('should return the initial state', () => {
    expect((mapReducer(undefined, {}))).toEqual (
      {
        tiles: tiles
      }
    )
  })

})
