import React, {Component} from 'react'
import Book from './book'

class CurrentlyReading extends Component {
  render () {
    const { books } = this.props;
    return (
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map((book, i) => book.shelf === 'currentlyReading' ?
                         <li key={i}><Book book={book}/></li> : null
                        )}
                    </ol>
                  </div>
                </div>
      )
  }
}

export default CurrentlyReading;
