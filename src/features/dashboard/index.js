import React from 'react'

function Dashboard(props) {
  //
  // store.dispatch({ type: 'ADD_TILES', payload: {
  //   tiles: store.getState().map.tiles,
  // }})

  return (
    <div
      style = {{
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
    </div>
  )
}

export default Dashboard
