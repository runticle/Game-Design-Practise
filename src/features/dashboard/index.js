import React from 'react'
import Messages from '../messages'
import Inventory from '../inventory'
import store from '../../config/store'
import {connect} from 'react-redux'
import {MESSAGES} from '../../config/constants'

function Rubies(props) {

  return (
    <div
    className='ruby'
    style = {{
      float: 'left',
      color: 'white',
      fontSize: '1em',
      width: '5%',
      height: '80%',
      paddingTop: '15px',
      textAlign: 'center'
    }}>
      {props.rubies}
    </div>
  )

}

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
    <Rubies
    rubies= { props.rubies } />
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
    inventory: store.getState().dashboard.inventory,
    rubies: store.getState().dashboard.rubies
  }
}

export default connect(mapStateToProps)(Dashboard)
