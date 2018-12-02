import React from 'react'
import Messages from '../messages'

function Dashboard(props) {
  //
  // store.dispatch({ type: 'ADD_TILES', payload: {
  //   tiles: store.getState().map.tiles,
  // }})

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
    <Messages />
    </div>
  )
}

export default Dashboard
