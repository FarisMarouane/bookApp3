import React from 'react'
import { Route } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import Search from './search'
import Shelves from './shelves'
import './App.css'

class BooksApp extends React.Component {
  state = {
  }

  render() {
    return (
      <div className="app">

        <Route path='/search' component={Search}/>

        <Route exact path='/' component={Shelves} />



      </div>
    )
  }
}

export default BooksApp
