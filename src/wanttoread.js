import React, {Component} from 'react'
import Book from './book'

class wantToRead extends Component {

  optionChangeHandler = (e) => {
    console.log(e.target.value);
  }

  render () {
    const { books } = this.props;
    return (
             <div className="bookshelf">
               <h2 className="bookshelf-title">Want to read</h2>
               <div className="bookshelf-books">
                 <ol className="books-grid">
                     {books.map((book, i) => book.shelf === 'wantToRead' ?
                       <li key={i}><Book book={book}/></li> : null
                     )}
                 </ol>
               </div>
             </div>
      )
  }
}


export default wantToRead;