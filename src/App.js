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

  statusChangeHandler = () => {
      BooksAPI.getAll()
      .then(books => this.setState({
        books
      })).catch(e => console.log(`Error: ${e.message}`))
      this.forceUpdate();
  }

  render () {
    return (
      <div className='app'>
        <Route path='/search' render={() => (
          <Search books={this.state.books} statusChangeHandler={this.statusChangeHandler}/>
        	)} />
        <Route exact path='/' render={() => (
          <Shelves books={this.state.books} statusChangeHandler={this.statusChangeHandler}/>
        	)} />
      </div>
    );
  }
}

export default BooksApp;
