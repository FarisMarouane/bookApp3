import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Shelf from './Shelf'

class Shelves extends Component {

  render () {
    const {books} = this.props;
    return (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>

                <Shelf title={'Currently Reading'} query={'currentlyReading'} getBooks={() => this.props.getBooks()}
                  books={books} />
                <Shelf title={'Want To Read'} query={'wantToRead'} getBooks={() => this.props.getBooks()}
                  books={books} />
                <Shelf title={'Read'} query={'read'} getBooks={() => this.props.getBooks()}
                  books={books} />

              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
      )
  }
}

export default Shelves;