import React from 'react'
import { connect } from 'react-redux'
import { SPRITE_SIZE, MAP_WIDTH, MAP_HEIGHT } from '../../config/constants'
import './styles.css'

function getTileSprite(type) {
  switch(type) {
    case 0:
      return 'grass'
    case 2:
      return 'chest'
    case 3:
      return 'tree'
    case 5:
      return 'rock'
    case 6:
      return 'tree'
    case 7:
      return 'player'
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
        props.tiles.map( tile => <MapTile tile={tile} />)
      }
    </div>
  )
}

function Map(props) {

  return (
    <div
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
    tiles: state.map.tiles
  }
}

export default connect(mapStateToProps)(Map)
