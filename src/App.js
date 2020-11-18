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
          <Route path="/about" component={About} />
          <Route path="/users/:ship" render={(props) => <Users {...props} message="Hello eveyone" />} />
          <Route exact path="/" component={Home} />
          <Route path="/strict-access" render={(props) => <StrictAccess {...props} user={{ name: 'joao', password: '1234'}} />} />
        </Switch>
      </BrowserRouter>
    );
  }
}


export default App;