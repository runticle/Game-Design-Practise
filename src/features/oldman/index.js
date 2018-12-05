import React from 'react'
import { connect } from 'react-redux'
import oldman from './oldman.png'

function Oldman(props) {

    return (
      <div
        style= {{
          position: 'absolute',
          top: '120px',
          left: '120px',
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

export default connect(mapStateToProps)(Oldman)
