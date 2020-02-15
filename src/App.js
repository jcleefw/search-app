import React from 'react'
import './App.scss'

import SearchPage from './Search/SearchPage'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/search">
          <SearchPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
