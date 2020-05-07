import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap'
import Home from "./components/Home"
import RestaurantUpdate from "./components/RestaurantUpdate"
import RestaurantCreate from "./components/RestaurantCreate"
import RestaurantSearch from "./components/RestaurantSearch"
import RestauranstList from "./components/RestauranstList"
import Login from "./components/Login"
import Logout from './components/Logout'
import Register from "./components/Register"
import AdminList from "./components/AdminList"
import Protected from './components/Protected'

function App() {
  return (
    <div className="App">
      <Router>

        <Route path="/logout">
          <Logout />
        </Route>

        <Route path="/login" render={props => (
          <Login {...props} />
        )}>
        </Route>

        <Protected exact path="/list" component={RestauranstList} />
        <Protected exact path="/update/:id" component={RestaurantUpdate} />
        <Protected exact path="/search" component={RestaurantSearch} />
        <Protected exact path="/create" component={RestaurantCreate} />
        <Route path="/register">
          <Register />
        </Route>
        <Protected exact path="/adminlist" component={AdminList} />
        <Protected exact path="/" component={Home} />

      </Router>
    </div >
  );
}

export default App;
