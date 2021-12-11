import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddBook from './components/AddBook';
import BookList from './components/BookList';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={BookList} />
        <Route exact path="/add-books" component={AddBook} />
      </Switch>
    </Router>

  );
}

export default App;
