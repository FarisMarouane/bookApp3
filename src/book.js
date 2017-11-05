import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'

class Book extends Component {

  state = {
    status: this.props.book.shelf || this.props.status || "none",
    rating: this.props.book.averageRating
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

  render () {
  const book = this.props.book;
  const  { status, rating } = this.state;
    return (
        <div className="book">
          <div className="book-top">
          <a href={book.infoLink} target="_blank">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
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
          {rating ?
            <div style={{marginTop: '5px'}}>
            {rating>0 ? <span className="fa fa-star checked"></span>: <span className="fa fa-star"></span>}
            {rating>1 ? <span className="fa fa-star checked"></span>: <span className="fa fa-star"></span>}
            {rating>2 ? <span className="fa fa-star checked"></span>: <span className="fa fa-star"></span>}
            {rating>3 ? <span className="fa fa-star checked"></span>: <span className="fa fa-star"></span>}
            {rating>4 ? <span className="fa fa-star checked"></span>: <span className="fa fa-star"></span>}
          </div>
          : null}
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
        </div>
      )
  }
}

export default Book;
