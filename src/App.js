import React from 'react';
import './App.css';
import Home from './Home';
import About from './About';
import Dogs from './Dogs';
import PageNotFound from './PageNotFound';
import Header from './Header';
import Dog from './Dog';
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
      dogs: [
        'oakley',
        'rocky',
        'happy',
        'gilmore'
      ]
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
          <Header/>
        <Switch>
          {/* switch shows the forst matching route
          or the last route listed
           */}
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          {/* <Route path="/dogs" component={Dogs}/> */}
          {/* to pass custom props (in addition to location, match, and history) to a "react Component", need a technique called "render props" */}
          <Route path="/dogs" 
            render={(props) => (
              <Dogs {...props}
              dogs={this.state.dogs}
              />
            )}
          />
          <Route component={PageNotFound}/>
        </Switch>
        <Route path="/dogs/:dog" component={Dog}/>
        <Link to="/">Home</Link>
        {/* <Home/> */}
        {/* <About/> */}
        <Link to="About">About</Link>
        {/* <Dogs/> */}
        <Link to="Dogs">Dogs</Link>
        <Link to="/toknowhere">Doesnt go anywhere</Link>
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
