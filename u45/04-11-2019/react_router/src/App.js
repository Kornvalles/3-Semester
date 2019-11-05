import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import data from "./data/data.json"



function App() {
  return (
    <div className="App">
      <Router>
      <Link to="/all">See all users</Link>
        <Switch>
          <Route exact path="/">
            Welcome
          </Route>
          <Route path="/all">
            <AllUsers />
          </Route>
          <Route path="/details/:index">
            <h3>Details for a user</h3>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

function AllUsers() {
    const users = data.users;
    return (
      users.map((user, index) => {
        return ( 
          <div>
          {user.first + " " + user.last}
          <Link to={/details/+index} >Details</Link>
          </div>
        )
      })
    )
}



export default App;
