# Book Inventory React

## Getting started

- Run `yarn` or `npm install` to get all necessary dependencies installed
- Run `yarn start` or `npm start` to start the app

## Overview

You and your partner run a web development firm and were contracted out by a local bookstore who wants to start being able to sell online.

## This app must meet the following user stories

### Customer

- As a customer, when I arrive to the home page, I see a list of all of the books, a search bar on top, and a checkout/cart area to the right.
- As a customer, I am able to filter the list of books by title or author.
- As a customer, I am able to add my book to the cart by clicking the "Add to cart" button.
- As a customer, when I add a book to the cart, I should see the total dollar amount be updated to reflect all of the books in the cart

#### Book model

| Column Name | Data Type |
| ----------- | --------- |
| id          | SERIAL    |
| title       | STRING    |
| author      | STRING    |
| pages       | STRING    |
| inCart      | BOOLEAN   |
