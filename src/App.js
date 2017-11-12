import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import Search from './Search';
import Shelves from './Shelves';
import './App.css';

class BooksApp extends React.Component {

  state = {
    books: []
  }

  componentDidMount () {
      BooksAPI.getAll()
      .then(books => this.setState({
        books
      })).catch(e => console.log(`Error: ${e.message}`))
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
          <Search books={this.state.books} getBooks={this.getBooks}/>
        	)} />
        <Route exact path='/' render={() => (
          <Shelves books={this.state.books} getBooks={this.getBooks}/>
        	)} />
      </div>
    );
  }
}

export default BooksApp;
