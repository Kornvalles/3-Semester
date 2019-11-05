import React from 'react';
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
        <AddBook />
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
  const handleSubmit = evt => {

  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" name="title" placeholder="Add title" />
        Info:
        <input type="text" name="info" placeholder="Add info" />
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
      Book with id: { bookId }
    </div>
  )
}

export default App;
