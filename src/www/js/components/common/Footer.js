import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <div className="footer-section">
        Maugdog, Inc. © {new Date().getFullYear()}
      </div>
    );
  }
});
