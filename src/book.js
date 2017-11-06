import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import ReactStars from 'react-stars'

class Book extends Component {

  state = {
    status: this.props.book.shelf || this.props.status || "none",
    book: this.props.book,
    originalRating: this.props.book.averageRating || 0,
    newRating: +localStorage.getItem(this.props.book.id)

  }



  optionChangeHandler = (e) => {
    const {book} = this.props;
    BooksAPI.update(book, e.target.value)
    .then(res => console.log(`Update fetch resp: ${res}`))
    .catch(err => console.log(`Error: ${err}`))

    this.setState({
      status: e.target.value
    })

    this.props.statusChangeHandler();
  }

  ratingChanged = (newRating) => {

    if(this.state.originalRating !== 0) {
      delete this.state.originalRating;
      localStorage.setItem( this.state.book.id, newRating);
    } else {
      localStorage.setItem( this.state.book.id, newRating);
    }

}

  render () {
  const book = this.props.book;
  const  { status, originalRating, newRating } = this.state;
    return (
        <div className="book">
          <div className="book-top">
          <a href={book.infoLink} target="_blank">
            <div title={book.description} className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
          </a>
            <div className="book-shelf-changer">
              <select value={status} onChange={(e) => this.optionChangeHandler(e)}>
                <option value="dunno" disabled>Move to...</option>
                <option value="currentlyReading">currentlyReading</option>
                <option value="wantToRead">wantToRead</option>
                <option value="read" defaultValue>Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <ReactStars count={5} value={newRating !== 0  ? newRating : originalRating}
           onChange={(e) => this.ratingChanged(e)} size={24}
          color2={'#ffd700'} />
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
        </div>
      )
  }
}

export default Book;
