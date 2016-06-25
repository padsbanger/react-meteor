import React from 'react';
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './components/App'
import Bin from './components/bins/Bin'
import BinsList from './components/bins/BinsList'

import { Bins } from '../imports/collections/bins'

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={BinsList} />
      <Route path="bins/:binId" component={Bin} />
    </Route>
  </Router>
)

Meteor.startup(() => {
  ReactDOM.render(routes, document.querySelector('.container'))
})
