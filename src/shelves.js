import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import CurrentlyReading from './CurrentlyReading'
import WantToRead from './WantToRead'
import Read from './Read'

class Shelves extends Component {

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
    const {books} = this.state;
    return (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>

              <CurrentlyReading statusChangeHandler={() => this.statusChangeHandler()}
               books={books} />
              <WantToRead statusChangeHandler={() => this.statusChangeHandler()}
               books={books} />
              <Read statusChangeHandler={() => this.statusChangeHandler()}
               books={books} />

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