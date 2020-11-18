import React, { Component } from 'react';
import Home from './Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './About';
import Users from './Users';
import StrictAccess from './StrictAccess';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/users/:ship" render={(props) => <Users {...props} message="Hello eveyone" />} />
          <Route exact path="/" component={Home} />
          <Route exact path="/strict-access" render={(props) => <StrictAccess {...props} user={{ name: 'joao', password: '1234'}} />} />
        </Switch>
      </BrowserRouter>
    );
  }
}


export default App;