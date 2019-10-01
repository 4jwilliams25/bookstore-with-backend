import React from 'react'
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col
} from 'reactstrap'
import PropTypes from 'prop-types'

const Book = props => {
  let { id, title, author, description, coverImg } = props.book
  return (
    <Card>
      <Row>
        <Col xs={{ size: 3 }}>
          <CardImg
            style={{ width: 100 }}
            top
            src={coverImg}
            alt="Card image cap"
          />
        </Col>
        <Col>
          <CardBody>
            <CardTitle>{title}</CardTitle>
            <CardSubtitle>{author}</CardSubtitle>
            <CardText>{description}</CardText>
            <Button onClick={() => props.addBookToCart(id)}>Add To Cart</Button>
          </CardBody>
        </Col>
      </Row>
    </Card>
  )
}

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    coverImg: PropTypes.string.isRequired
  }),
  addBookToCart: PropTypes.func.isRequired
}

export default Book
