import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  render: function() {
    return (
      <ul className="navigation">
        <li><Link to="/"><i className="ig ig-home"></i><span>Home</span></Link></li>
        <li><Link to="/docs"><i className="ig ig-document"></i><span>Docs</span></Link></li>
        <li className="nav-right"><Link to="/icons"><i className="ig ig-iconoglyphy"></i><span>Icons</span></Link></li>
      </ul>
    );
  }
});
