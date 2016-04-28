import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

// Declarative route configuration (could also load this config lazily
// instead, all you really need is a single root route, you don't need to
// colocate the entire config).
render((
  <Router history={browserHistory}>
    <Route path="/" component={FullScreenHero}>
      <Route path="download" component={DownloadPage}/>
    </Route>
  </Router>
), document.getElementById('content'));
