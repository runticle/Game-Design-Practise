import {dispatchStoreVisibility } from '../../actions/actions'
export default function handleShopping(shop) {

  function handleKeydown(e) {
    e.preventDefault()

    switch(e.keyCode) {
      case 27:
        return dispatchStoreVisibility('none')
      default:
        return null
    }
  }

  window.addEventListener('keydown', (e) => {
    handleKeydown(e)
  })

  return shop
}
