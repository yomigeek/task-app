import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import Page404 from './Page404';
import Login from './Pages/Login';
import '../styles/App.scss';
import Dashboard from './Pages/Dashboard';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/dashboard" component={Dashboard} />
      {/* <Route to="*" component={Page404} /> */}
    </Switch>
  </div>
);

export default App;
