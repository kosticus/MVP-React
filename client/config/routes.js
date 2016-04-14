import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import Main from '../components/main'

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <Route path='/home' component={Main} />
    </Route>
  </Router>
);

export default routes
