import React from 'react'
import HeroSection from '../common/HeroSection'
import IconScroller from './IconScroller'
import InstructionsSection from './InstructionsSection'

export default React.createClass({
  render: function() {
    return (
      <div className="splash">
        <HeroSection>

          <div className="iconoglyphy-logo">
            <i className="ig ig-iconoglyphy"></i><h1>iconoglyphy</h1>
          </div>

          <h3>Animated and static icons for your apps</h3>

          <IconScroller />

        </HeroSection>

        <InstructionsSection />

        {this.props.children}
      </div>
    );
  }
});
