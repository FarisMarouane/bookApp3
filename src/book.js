import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'

class Book extends Component {

  state = {
    status: this.props.book.shelf
  }

  optionChangeHandler = (e) => {
    console.log(e.target.value);
    this.setState({
      status: e.target.value
    })
    const {book} = this.props;
    BooksAPI.update(book, e.target.value)
    .then(res => console.log(`Update fetch resp: ${res}`))
    .catch(err => console.log(`Error: ${err}`))
  }

  render () {
  const { book } = this.props;
  const { status } = this.state;
    return (
        <div className="book">
          <div className="book-top">
          <a href={book.infoLink} target="_blank">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
          </a>
            <div className="book-shelf-changer">
              <select defaultValue={status} onChange={this.optionChangeHandler}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">currentlyReading</option>
                <option value="wantToRead">wantToRead</option>
                <option value="read" defaultValue>Read</option>
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
