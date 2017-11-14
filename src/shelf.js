import React from 'react';
import Book from './book';

const Shelf = ({books, title, query, optionChangeHandler }) => {
  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>{title}</h2>
      <div className='bookshelf-books'>
        <ol className='books-grid'>
          {books.map((book, i) => book.shelf === query
                        ? <li key={i}>
                          <Book book={book} optionChangeHandler={optionChangeHandler}
                            status={book.shelf}
                            originalRating={book.averageRating} />
                        </li> : null
                        )}
        </ol>
      </div>
    </div>
  );
};

export default Shelf;
