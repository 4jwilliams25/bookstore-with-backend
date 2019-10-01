const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 8082;

const booksService = require("./booksService");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/api/books", (req, res) => {
  res.json(booksService.getAll());
});

app.patch("/api/books/update/:id", (req, res) => {
  res.json(booksService.updateBook(Number(req.params.id), req.body));
});

app.patch("/api/books/cart/add/:id", (req, res) => {
  res.json(booksService.addToCart(Number(req.params.id)));
});

app.patch("/api/books/cart/remove/:id", (req, res) => {
  res.json(booksService.removeFromCart(Number(req.params.id)));
});

app.delete("/api/books/delete/:id", (req, res) => {
  if (!res) {
    return res
      .status(404)
      .send("A book with the provided Id number was not found...");
  }
  res.json(booksService.deleteBook(Number(req.params.id)));
});

app.post("/api/books", (req, res) => {
  res.json(booksService.addBook(req.body));
});

app.listen(port, () => console.log("Listening at port 8082"));
