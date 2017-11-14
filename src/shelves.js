import React from 'react';
import {Link} from 'react-router-dom';
import Shelf from './shelf';

const Shelves = ({ books, optionChangeHandler }) => {
  return (
    <div className='list-books'>
      <div className='list-books-title'>
        <h1>MyReads</h1>
      </div>
      <div className='list-books-content'>
        <div>

          <Shelf title={'Currently Reading'} optionChangeHandler={optionChangeHandler} query={'currentlyReading'}
            books={books} />
          <Shelf title={'Want To Read'} optionChangeHandler={optionChangeHandler} query={'wantToRead'}
            books={books} />
          <Shelf title={'Read'} optionChangeHandler={optionChangeHandler} query={'read'}
            books={books} />

        </div>
      </div>
      <div className='open-search'>
        <Link to='/search'>Add a book</Link>
      </div>
    </div>
  );
};

export default Shelves;
