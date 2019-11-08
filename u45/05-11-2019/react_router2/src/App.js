import React, { useState } from 'react';
import './App.css';
import {
  Switch,
  Route,
  NavLink,
  Link,
  useRouteMatch,
  useParams
} from 'react-router-dom';



function App(props) {
  return (
    <div>
      <Header />
      <Content bookFacade={props.bookFactory} />
    </div>
  );
}

const Header = () => {
  return (
    <ul className="header">
      <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
      <li><NavLink activeClassName="active" to="/products">Products</NavLink></li>
      <li><NavLink activeClassName="active" to="/add-book">Add Book</NavLink></li>
      <li><NavLink activeClassName="active" to="/company">Company</NavLink></li>
    </ul>
  );
}

const Content = (props) => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/products">
        <Products bookFacade={props.bookFacade} />
      </Route>
      <Route path="/company">
        <Company />
      </Route>
      <Route path="/add-book">
        <AddBook bookFacade={props.bookFacade} />
      </Route>
      <Route>
        <NoMatch />
      </Route>
    </Switch>
  );
}

const Home = () => <div>Home</div>
const Products = ({ bookFacade }) => {
  const books = bookFacade.getBooks();
  let match = useRouteMatch();
  return (
    <div>
      <p>Antal bøger: {books.length}</p>
      <table>
        <thead>
          <tr><th>ID</th><th>TITLE</th><th>INFO</th></tr>
        </thead>
        <tbody>
          {books.map((book) => {
            return (
              <tr key={book.id}>
                <td><Link to={`${match.url}/${book.id}`}>{book.id}</Link></td>
                <td>{book.title}</td>
                <td>{book.info}</td>
              </tr>
            )
          })
          }
        </tbody>
      </table>
      <Route path={`${match.path}/:bookId`}>
        <Book />
      </Route>
    </div>
  )
}
const Company = () => <div>Company</div>
const AddBook = ({ bookFacade }) => {
  const intialValue = { id: null, title: "", info: "" };
  const [book, setBook] = useState(intialValue);
  const handleSubmit = evt => {
    evt.preventDefault();
    bookFacade.addBook(book);
    setBook(intialValue)
  }
  const handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setBook({ ...book, [name]: value });
  };
  return (
    <form onSubmit={handleSubmit} >
      <label>
        Title:
      <input
          type="text"
          value={book.title}
          name="title"
          placeholder="Add title"
          onChange={handleChange}
          required />
      </label>
      <label>
        Info:
      <input
          type="text"
          name="info"
          value={book.info}
          placeholder="Add info"
          onChange={handleChange}
          required />
      </label>
      <input type="submit" value="Save" />
    </form>
  )
}
const NoMatch = () => <div>NoMatch</div>
const Book = () => {
  let { bookId } = useParams();
  return (
    <div>
      Book with id: {bookId}
    </div>
  )
}

export default App;
