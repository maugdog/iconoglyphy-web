import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render: function() {
    return (
      <ul className="navigation">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/documentation">Documentation</Link></li>
        <li className="nav-right"><Link to="/icons">Icons</Link></li>
      </ul>
    );
  }
});
