import React, { Component } from "react";
import axios from "axios";
import TopNav from "./components/TopNav";
import { Container, Row, Col } from "reactstrap";
import BookList from "./components/BookList";
import Cart from "./components/Cart";

class App extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    axios
      .get(`http://localhost:8082/api/books`)
      .then(res => this.setState({ books: res.data }));
  }

  addBookToCart = id => {
    axios.patch(`http://localhost:8082/api/books/cart/add/${id}`).then(res => {
      let updatedBookList = this.state.books.map(book => {
        if (book.id === id) {
          return { ...book, inCart: true };
        } else {
          return book;
        }
      });

      this.setState({ books: updatedBookList });
    });
  };

  removeBookFromCart = id => {
    axios
      .patch(`http://localhost:8082/api/books/cart/remove/${id}`)
      .then(res => {
        let updatedBookList = this.state.books.map(book => {
          if (book.id === id) {
            return { ...book, inCart: false };
          } else {
            return book;
          }
        });

        this.setState({ books: updatedBookList });
      });
  };

  render() {
    return (
      <div className="App">
        <TopNav />
        <Container>
          <Row>
            <Col xs={{ size: 8 }}>
              <BookList
                books={this.state.books}
                addBookToCart={this.addBookToCart}
              />
            </Col>
            <Col>
              <Cart
                cartItems={this.state.books}
                removeBookFromCart={this.removeBookFromCart}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
