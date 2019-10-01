import React from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap'
import PropTypes from 'prop-types'

const CartItem = props => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>{props.item.title}</CardTitle>
          <CardSubtitle>${props.item.price}.00</CardSubtitle>
          <Button onClick={() => props.removeBookFromCart(props.item.id)}>
            Remove
          </Button>
        </CardBody>
      </Card>
    </div>
  )
}

CartItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }),
  removeBookFromCart: PropTypes.func.isRequired
}

export default CartItem
