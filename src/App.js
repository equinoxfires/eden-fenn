import React from 'react';
import Home from './Home.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">

      <Router>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/novel">The Dweller's House</Link>
            </li>
            <li>
              <Link to="/stories">Stories</Link>
            </li>
          </ul>
        </nav>


        <Switch>

          <Route path="/about">
            <p>about page</p>
          </Route>
          <Route path="/novel">
            <p>novel page</p>
          </Route>
          <Route path="/stories">
            <p>stories page</p>
          </Route>
          <Route path="/stories">
            <p>stories page</p>
          </Route>
          <Route path="*">
            <Home name="Eden" />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
