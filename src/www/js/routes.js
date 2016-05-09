// modules/routes.js
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Splash from './components/splash/Splash';
import DocsSection from './components/docs/DocsSection';
import Icons from './components/icons/Icons';
import Icon from './components/icons/Icon';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Splash}/>
    <Route path="/docs" component={DocsSection}></Route>
    <Route path="/icons" component={Icons}></Route>
    <Route path="/icon/:iconName" component={Icon}></Route>
  </Route>
);
