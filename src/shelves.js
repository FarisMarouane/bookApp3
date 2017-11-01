import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import CurrentlyReading from './currentlyreading'
import WantToRead from './wanttoread'
import Read from './read'

class Shelves extends Component {

  state = {
    books: []
  }

  componentDidMount () {
    BooksAPI.getAll().then(books => this.setState(prevState => ({
      books: prevState.books.concat(books)
    })))
  }

  render () {
    const {books} = this.state;
    return (


          <div className="list-books">
          {books.map(book => null)}
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>

              <CurrentlyReading />
              <WantToRead />
              <Read />

              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
      )
  }
}

export default Shelves;
