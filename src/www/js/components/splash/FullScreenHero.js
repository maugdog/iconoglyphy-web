import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render: function() {
    return (
      <div className="fullScreenHero">
        <Link to="/download">Download</Link>
      </div>
    );
  }
});
