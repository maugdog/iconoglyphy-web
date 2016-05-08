import React from 'react';
import BannerHeader from './common/BannerHeader';
import Navigation from './common/Navigation';

export default React.createClass({
  render: function() {
    return (
      <div className="app-wrapper">

        <BannerHeader />
        <Navigation />

        {this.props.children}
      </div>
    );
  }
});
