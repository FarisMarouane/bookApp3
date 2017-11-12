import React, {Component} from 'react'
import Book from './Book'

class Read extends Component {

  statusChangeHandler = () => {
   this.props.statusChangeHandler();
  }


  render () {
    const { books } = this.props;
    return (
             <div className="bookshelf">
               <h2 className="bookshelf-title">Read</h2>
               <div className="bookshelf-books">
                 <ol className="books-grid">
                     {books.map((book, i) => book.shelf === 'read' ?
                        <li key={i}><Book statusChangeHandler={() => this.statusChangeHandler()}
                          book={book} status={book.shelf} originalRating={book.averageRating}/>
                        </li> : null
                     )}
                 </ol>
               </div>
             </div>
      )
  }
}


export default Read;