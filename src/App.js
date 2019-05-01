import React from 'react';
import './App.css';
import Home from './Home';
import About from './About';
import Dogs from './Dogs';
import PageNotFound from './PageNotFound';

import {
  Link,
  Route,
  Switch
} from 'react-router-dom';
// what is bind?
// 
class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    // I definitely have access to the instance here
    // use .bind to "lock in" the value of 'this'
    // this._incrementCount = this._incrementCount.bind(this);
    // functions are "callable" objects
    //  as an object, they can have methods
    // one of the methods is .bind
    // .bind returns a new copy of the function, with the value of 'this' locked in.
  }
  render() {
    return (
      <div className="App">
        {/* <h1>{this.state.counter}</h1>
        <button onClick={this._incrementCountArrowFun}>+</button>
        link it used instead of an anchor tag */}
        <Link to="/">Home</Link>
        {/* <Home/> */}
        {/* <About/> */}
        <Link to="About">About</Link>
        {/* <Dogs/> */}
        <Link to="Dogs">Dogs</Link>
        <Link to="/toknowhere">Doesnt go anywhere</Link>
        <Switch>
          {/* switch shows the forst matching route
          or the last route listed
           */}
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route component={PageNotFound}/>
          <Route path="/dogs" component={Dogs}/>

        </Switch>
      </div>
    );
  }
// // normal mentod
//   _incrementCount() {
//     this.setState({
//       counter: this.state.counter + 1
//     });
//   }
//   // arrow functions give you "auto .bind"
//   // better way to go
//   _incrementCountArrowFun = () => {
//     this.setState({
//       counter: this.state.counter + 1
//     });
//   }
}

export default App;
