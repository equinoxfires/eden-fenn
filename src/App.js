import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home.js';
import Stories from './Stories.js';
import Novel from './Novel.js';
import About from './About.js';
import './App.css';

function App() {

  const [route, setRoute] = useState('home');
  const [story, setStory] = useState('none');

  return (
    <div className="App">
      <div id="inner">
        <Router>

          <nav>
            <ul>
              <li>
                <Link className={route === "home" ? "selected" : ''} onClick={() => { setRoute('home'); setStory('none'); }} to="/">Home</Link>
              </li>
              <li>
                <Link className={route === "about" ? "selected" : ''} onClick={() => { setRoute('about'); setStory('none'); }} to="/about">About</Link>
              </li>
              <li>
                <Link className={route === "novel" ? "selected" : ''} onClick={() => { setRoute('novel'); setStory('none'); }} to="/novel">The Dweller's House</Link>
              </li>
              <li>
                <Link className={route === "stories" ? "selected" : ''} onClick={() => { setRoute('stories'); setStory('none'); }} to="/stories">Stories</Link>
              </li>
            </ul>
          </nav>


          <Switch>

            <Route path="/about">
              <About setRoute={setRoute} />
            </Route>
            <Route path="/novel">
              <Novel />
            </Route>
            <Route path="/stories">
              <Stories setStory={setStory} story={story} />
            </Route>
            <Route path="*">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>


    </div>
  );
}

export default App;
