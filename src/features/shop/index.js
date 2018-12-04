import React from 'react'
import { connect } from 'react-redux'
import handleShopping from './shopping'
import { dispatchStoreVisibility } from '../map/interaction_functions'

function Shop(props) {

  return (
    <div
      style= {{
        backgroundColor: 'lightgrey',
        border: '4px solid black',
        display: props.shopVisibility,
        position:'absolute',
        top:"40px",
        left: '40px',
        width: '720px',
        height: '400px'
      }}>

        <div
          id='exit_store'
          style={{
            backgroundColor: 'grey',
            position: 'absolute',
            bottom: '10px',
            right: '10px',
            width: '80px',
            height: '30px',
            border: '3px solid black',
            paddingTop: '10px',
            textAlign: 'center'
          }}>
            EXIT (esc)
        </div>

    </div>
  )
}


  function mapStateToProps(state) {
    return {
      ...state.shop
    }
  }



export default connect(mapStateToProps)(handleShopping(Shop))
