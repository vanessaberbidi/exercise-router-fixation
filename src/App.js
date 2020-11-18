import React, { Component } from 'react';
import Home from './Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './About';
import Users from './Users';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/users/:ship" render={(props) => <Users {...props} message="Hello eveyone" />} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}


export default App;