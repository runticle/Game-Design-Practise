import React from 'react'
import store from '../../config/store'
import { connect } from 'react-redux'

function Messages(props) {

  return (
    <div style = {{
      float: 'right',
      color: 'white',
      width: '30%',
      height: '80%',
      padding: '5px',
      borderLeft: '1px solid white',
      backgroundColor: "grey"
    }}>
      {props.messages}
    </div>
  )

}

export default Messages
