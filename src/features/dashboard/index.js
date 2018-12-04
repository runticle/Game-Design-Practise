import React from 'react'
import Messages from '../messages'
import store from '../../config/store'
import {connect} from 'react-redux'
import {MESSAGES} from '../../config/constants'

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
        backgroundColor: 'brown'
      }}
    >
    <Messages
    message={MESSAGES[props.messageIndex]} />
    </div>
  )
}

function mapStateToProps(state) {
  return {
    messageIndex: store.getState().dashboard.messageIndex
  }
}

export default connect(mapStateToProps)(Dashboard)
