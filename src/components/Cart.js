import React from 'react'
import CartItem from './CartItem'
import PropTypes from 'prop-types'

const Cart = props => {
  let arrOfCartItems = props.cartItems.filter(item => item.inCart)
  let cartItemComponents = arrOfCartItems.map(item => (
    <CartItem
      key={item.id}
      item={item}
      removeBookFromCart={props.removeBookFromCart}
    />
  ))

  let totalPrice = arrOfCartItems.reduce(
    (acc, cartItem) => (acc += cartItem.price),
    0
  )
  return (
    <div>
      {cartItemComponents}
      <p>Total: ${totalPrice}.00 </p>
    </div>
  )
}

Cart.propTypes = {
  cartItems: PropTypes.array.isRequired,
  removeBookFromCart: PropTypes.func.isRequired
}

export default Cart
