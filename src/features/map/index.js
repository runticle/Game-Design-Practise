import React from 'react'
import { connect } from 'react-redux'
import { SPRITE_SIZE, MAP_WIDTH, MAP_HEIGHT } from '../../config/constants'
import './styles.css'
import handleCollect from './collect'
import handleInteract from './interact'
import store from '../../config/store'


function getTileSprite(type) {
  switch(type) {
    case 0:
      return 'grass'
    case 1:
      return 'dirt'
    case 2:
      return 'dragon-egg'
    case 3:
      return 'tree'
    case 5:
      return 'rock'
    case 6:
      return 'tree'
    case 7:
      return 'player'
    case 8:
      return 'oldman'
    default:
      return null
  }
}

function MapTile(props) {
  return (
    <div
      className={ `tile ${getTileSprite(props.tile)}`}
      style = {{
        height: SPRITE_SIZE,
        width: SPRITE_SIZE,
      }}
    >.</div>
  )
}

function MapRow(props) {
  return (
    <div className='row'>
      {
        props.tiles.map( (tile,i) => <MapTile tile={tile} />)
      }
    </div>
  )
}

function Map(props) {

  return (
    <div
      className="map_background"
      style = {{
        position: 'relative',
        top: '0px',
        left: '0px',
        width: `${MAP_WIDTH}px`,
        height: `${MAP_HEIGHT}px`,
        border: '4px solid white',
      }}
    >
      {
        props.tiles.map( row => <MapRow tiles={row}/>)
      }
    </div>
  )
}

function mapStateToProps(state) {
  return {
    tiles: store.getState().map.tiles
  }
}

export default connect(mapStateToProps)(handleCollect(handleInteract(Map)))
