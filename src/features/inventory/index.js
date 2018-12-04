import React from 'react'
import { SPRITE_SIZE } from '../../config/constants'


function getItemSprite(type) {
  switch(type) {
    case 2:
      return 'dragon-egg'
    default:
      return null
  }
}

function Item(props) {
  return (
    <div
      className={`item ${getItemSprite(props.item)}`}
      style = {{
        height: SPRITE_SIZE,
        width: SPRITE_SIZE,
        float: 'left'
      }}
    ></div>
  )
}

function Inventory(props) {

  return (
    <div
      id={'inventory'}
      style = {{
        float: 'left',
        color: 'white',
        width: '67%',
        height: '80%',
        padding: '5px',
        overflow: 'hidden',
        backgroundColor: "brown"
    }}
    >
      {
        props.inventory.map(item => <Item item={item} />)
      }
    </div>
  )

}

export default Inventory
