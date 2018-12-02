import React from 'react'
import Messages from '../messages'
import store from '../../config/store'
import {connect} from 'react-redux'

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
    messages={props.messages} />
    </div>
  )
}

function mapStateToProps(state) {
  return {
    messages: store.getState().dashboard.messages
  }
}

export default connect(mapStateToProps)(Dashboard)
