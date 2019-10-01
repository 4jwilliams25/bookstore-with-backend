import React, { Component } from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

class BookList extends Component {
  state = {
    filterPhrase: '',
    filterBy: 'title'
  }

  handleChange = e => {
    let { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    let listOfBooks = this.props.books
      .filter(book =>
        book[this.state.filterBy].includes(this.state.filterPhrase)
      )
      .map(book => (
        <Book
          key={book.id}
          book={book}
          addBookToCart={this.props.addBookToCart}
        />
      ))
    return (
      <div>
        <input type="text" name="filterPhrase" onChange={this.handleChange} />
        <select name="filterBy" onChange={this.handleChange}>
          <option value="title">Title</option>
          <option value="author">Author</option>
        </select>
        {listOfBooks}
      </div>
    )
  }
}

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  addBookToCart: PropTypes.func.isRequired
}

export default BookList
