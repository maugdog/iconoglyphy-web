import React from 'react'

export default React.createClass({
  render: function() {
    return (
      <div className="hero-section">
        {this.props.children}
      </div>
    );
  }
});
