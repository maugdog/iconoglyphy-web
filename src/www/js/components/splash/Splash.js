import React from 'react'
import FullScreenHero from './FullScreenHero'

export default React.createClass({
  render: function() {
    return (
      <div className="splash">
        <FullScreenHero />

        {this.props.children}
      </div>
    );
  }
});
