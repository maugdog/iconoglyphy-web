import React from 'react'

export default React.createClass({
  render: function() {
    return (
      <div className="fullScreenHero">
        <h1>Iconoglyphy</h1>

        {this.props.children}
      </div>
    );
  }
});
