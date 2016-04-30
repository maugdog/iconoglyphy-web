// modules/routes.js
import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import Splash from './components/splash/Splash'
import Download from './components/download/DownloadPage'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Splash}/>
    <Route path="/download" component={Download}></Route>
  </Route>
);
