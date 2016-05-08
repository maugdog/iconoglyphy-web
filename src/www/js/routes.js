// modules/routes.js
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Splash from './components/splash/Splash';
import Documentation from './components/documentation/Documentation';
import Icons from './components/icons/Icons';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Splash}/>
    <Route path="/documentation" component={Documentation}></Route>
    <Route path="/icons" component={Icons}></Route>
  </Route>
);
