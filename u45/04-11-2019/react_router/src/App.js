import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import data from "./data/data.json"
import { useParams } from "react-router";



function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/all">See all users</Link>
        <Switch>
          <Route exact path="/">
            <h1>Welcome</h1>
          </Route>
          <Route path="/all">
            <AllUsers />
          </Route>
          <Route path="/details/:index">
            <Details />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

function AllUsers() {
  const users = data.users;
  const list = [];
  users.map((user, index) => {
    return (
      list.push(
        <tr key={user.phone}>
          <td>
            <img src={user.picture.thumbnail} alt="thumbnail" />
          </td>
          <td>
            {user.first + " " + user.last}
          </td>
          <td>
            <Link to={"/details/" + index} >Details</Link>
          </td>
        </tr >
      ))
  })

  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>
            Name
          </th>
          <th>
            Details
          </th>
        </tr>
      </thead>
      <tbody>
        {list}
      </tbody>
    </table>
  )
}

function Details() {
  let { index } = useParams();
  const users = data.users;
  const user = users[index];
  const val = Object.values(user);
  val.pop();
  const newList = val.map((element, index) => <li key={index}>{element}</li>)
  return (
    <div>
      <ul>
        {newList}
      </ul>
    </div>
  )
}


export default App;
