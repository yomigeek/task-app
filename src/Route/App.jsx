import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import Page404 from './Page404';
import Login from '../components/Pages/Login';
import '../styles/App.scss';
import Dashboard from '../components/Pages/Dashboard';
import checkAuthentication from '../hoc/Authentication';
import CreateStory from '../components/Pages/CreateStory';
import ViewStory from '../components/Pages/ViewStory';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/create" component={checkAuthentication(CreateStory)} />
      <Route exact path="/dashboard" component={checkAuthentication(Dashboard)} />
      <Route exact path="/view/:id" component={checkAuthentication(ViewStory)} />
      {/* <Route to="*" component={Page404} /> */}
    </Switch>
  </div>
);

export default App;
