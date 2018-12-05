import React from 'react'
import { connect } from 'react-redux'
import oldman from './oldman.png'
import { setPosition } from './position'


function Oldman(props) {

    return (
      <div
        style= {{
          position: 'absolute',
          top: props.position[1],
          left: props.position[0],
          backgroundImage: `url('${oldman}')`,
          backgroundSize: '40px',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          transform: 'scaleX(-1)',
          width: '40px',
          height: '40px',
        }}
      />
    )
}

function mapStateToProps(state) {
  return {
    ...state.oldman,
  }
}

export default connect(mapStateToProps)(setPosition(Oldman))
