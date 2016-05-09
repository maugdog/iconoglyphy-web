import React from 'react';
import Slider from 'react-slick';

export default React.createClass({
  render: function() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false
    };
    return (
      <div className="icon-scroller">

        <div className="scroll-content icons">
          <div className="fade-overlay fade-left"></div>
          <Slider {...settings}>
            <div className="ig ig-gear-o"></div>
            <div className="ig ig-refresh"></div>
            <div className="ig ig-power-o"></div>
            <div className="ig ig-info-circle-o"></div>
            <div className="ig ig-close-circle"></div>
            <div className="ig ig-home"></div>
            <div className="ig ig-plus-circle"></div>
            <div className="ig ig-close"></div>
            <div className="ig ig-document"></div>
            <div className="ig ig-question-circle-o"></div>
            <div className="ig ig-plus"></div>
          </Slider>
          <div className="fade-overlay fade-right"></div>
        </div>

      </div>
    );
  }
});
