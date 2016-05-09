import React from 'react';
import HeroSection from '../common/HeroSection';

export default React.createClass({
  render: function() {
    var iconClass = 'ig ig-' + this.props.params.iconName;
    return (
      <div className="icons-page">
        <HeroSection>
          <i className={ iconClass }></i>
        </HeroSection>
      </div>
    );
  }
});
