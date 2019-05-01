import React from 'react';
import './App.css';
import Home from './Home';
import About from './About';
import Dogs from './Dogs';

import {
  Link,
  Route
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* link it used instead of an anchor tag */}
      <Link to="/">Home</Link>
      {/* <Home/> */}
      <Route exact path="/" component={Home}/>
      {/* <About/> */}
      <Link to="About">About</Link>
      <Route path="/about" component={About}/>
      {/* <Dogs/> */}
      <Link to="Dogs">Dogs</Link>
      <Route path="/dogs" component={Dogs}/>
    </div>
  );
}

export default App;
