import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <div className="hero-section no-select">
        {this.props.children}
      </div>
    );
  }
});
