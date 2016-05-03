import React from 'react'

export default React.createClass({
  render: function() {
    return (
      <div className="icon-scroller">
        <i className="ig ig-chevron-left nav-left"></i>

        <div className="scroll-content icons">
          <i className="ig ig-gear-o"></i>
          <i className="ig ig-gear ig-spin" key="123456789"></i>
          <i className="ig ig-circle-o"></i>
          <i className="ig ig-power-o"></i>
          <i className="ig ig-close-circle"></i>
          <i className="ig ig-plus-circle"></i>
        </div>

        <i className="ig ig-chevron-right nav-right"></i>
      </div>
    );
  }
});
