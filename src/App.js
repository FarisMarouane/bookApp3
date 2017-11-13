import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import Search from './Search';
import Shelves from './Shelves';
import './App.css';

class BooksApp extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    books: []
  };
}

  componentDidMount () {
    this.getBooks();
  }

  optionChangeHandler (e, book) {
    BooksAPI.update(book, e.target.value)
    .then(res => console.log(`Update fetch resp: ${res}`))
    .catch(err => console.log(`Error: ${err}`))

    this.setState({
      status: e.target.value
    })

    this.getBooks();
  }

  getBooks = () => {
      BooksAPI.getAll()
      .then(books => this.setState({
        books
      })).catch(e => console.log(`Error: ${e.message}`))
  }

  render () {
    return (
      <div className='app'>
        <Route path='/search' render={() => (
          <Search books={this.state.books} />
        	)} />
        <Route exact path='/' render={() => (
          <Shelves books={this.state.books} />
        	)} />
      </div>
    );
  }
}

export default BooksApp;
