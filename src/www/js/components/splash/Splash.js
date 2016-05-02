import React from 'react'
import HeroSection from './HeroSection'

export default React.createClass({
  render: function() {
    return (
      <div className="splash">
        <HeroSection>

          <div className="iconoglyphy-logo">
            <h1>iconoglyphy</h1>
          </div>

          <h3>Animated and static icons for your apps</h3>

        </HeroSection>

        {this.props.children}
      </div>
    );
  }
});
