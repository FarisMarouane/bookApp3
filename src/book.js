import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'

class Book extends Component {

  optionChangeHandler = (e) => {
    const {book} = this.props;
    BooksAPI.update(book, e.target.value)
    .then(res => console.log(`Update fetch resp: ${res}`))
    .catch(err => console.log(`Error: ${err}`))
  }

  render () {
  const { book } = this.props;
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
          <div className="book-shelf-changer">
            <select onChange={this.optionChangeHandler}>
              <option value="none" disabled>Move to...</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
      )
  }
}

export default Book;
