import React, {Component} from 'react'
import Book from './Book'

class Shelf extends Component {

  render () {
    const { books, title, query } = this.props;
    return (
                <div className="bookshelf">
                  <h2 className="bookshelf-title">{title}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map((book, i) => book.shelf === query ?
                          <li key={i}><Book getBooks={() => this.props.getBooks()}
                            book={book} status={book.shelf} originalRating={book.averageRating}/>
                          </li> : null
                        )}
                    </ol>
                  </div>
                </div>
      )
  }
}

export default Shelf;
