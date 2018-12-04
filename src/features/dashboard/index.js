import React from 'react'
import Messages from '../messages'
import Inventory from '../inventory'
import store from '../../config/store'
import {connect} from 'react-redux'
import {MESSAGES} from '../../config/constants'

// function sortInventory(inventory) {
//   const newInventory = {}
//   console.log(inventory)
//   inventory.forEach(function(item) {
//     newInventory[item] += 1
//   })
//   console.log(newInventory)
//   return inventory
// }

function Dashboard(props) {

  return (
    <div
      style = {{
        padding: '4px',
        border: '4px solid white',
        top: '100px',
        left: '5px',
        position: 'relative',
        width: '800px',
        height: '50px',
        margin: '0 auto',
      }}
    >
    <Inventory
    inventory={props.inventory} />
    <Messages
    message={MESSAGES[props.messageIndex]} />
    </div>
  )
}

function mapStateToProps(state) {
  return {
    messageIndex: store.getState().dashboard.messageIndex,
    inventory: store.getState().dashboard.inventory
  }
}

export default connect(mapStateToProps)(Dashboard)
