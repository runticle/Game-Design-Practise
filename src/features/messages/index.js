import React from 'react'

export function Messages(props) {

  return (
    <div style = {{
      float: 'right',
      color: 'white',
      width: '30%',
      height: '80%',
      padding: '5px',
      backgroundColor: "grey"
    }}>
      {props.message}
    </div>
  )

}

export default Messages
