import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Book from './book'
import * as BooksAPI from './BooksAPI'


class Search extends Component {

  state = {
    bookSearchResults : [],
    shelvesBooks : []
  }

  componentDidMount () {
      BooksAPI.getAll()
      .then(books => this.setState({
        shelvesBooks: books.map(book => ({id: book.id, shelf: book.shelf}))
      })).catch(e => console.log(`Error: ${e.message}`))
  }

  searchChangeHandler = (e) => {
    return (
      BooksAPI.search(e.target.value, 20)
      .then(bookSearchResults => this.setState({
        bookSearchResults
      })).catch(e => console.log(`Error: ${e.message}`))
      )
  }

  render () {
    const { shelvesBooks, bookSearchResults } = this.state;
    return (
          <div>
            <div className="search-books-bar">
              <Link to='/' className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input onChange={this.searchChangeHandler} type="text" placeholder="Search by title or author"/>

              </div>
            </div>
              <div className="search-books-results">
                <ol className="books-grid">
                  {bookSearchResults.map(function (book, i) {

                    let bookSearchResultStatus = shelvesBooks.filter(function (shelvesBook) {
                      return shelvesBook.id === book.id;
                    })

                    return (
                        <li key={i}>
                          <Book status={bookSearchResultStatus[0] ?
                           bookSearchResultStatus[0].shelf : 'none'} book={book} />
                        </li>
                      )
                  }
                    )}
                </ol>
              </div>


          </div>
      )
  }
}

export default Search;