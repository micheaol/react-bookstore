import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddBook from '../AddBook';
import BookList from '../BookList/index';
import Navbar from '../Navbar';

const index = () => (
  <>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <BookList />
        </Route>
        <Route exact path="/add-books">
          <AddBook />
        </Route>
      </Switch>
    </Router>
  </>
);

export default index;
