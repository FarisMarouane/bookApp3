import React, {Component} from 'react'
import Book from './book'

class Read extends Component {
  render () {
    const { books } = this.props;
    return (
             <div className="bookshelf">
               <h2 className="bookshelf-title">Read</h2>
               <div className="bookshelf-books">
                 <ol className="books-grid">
                     {books.map((book, i) => book.shelf === 'read' ?
                       <li key={i}><Book book={book}/></li> : null
                     )}
                 </ol>
               </div>
             </div>
      )
  }
}


export default Read;