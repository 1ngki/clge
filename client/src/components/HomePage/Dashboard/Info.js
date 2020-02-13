import React, { Component } from 'react';
import Slider from 'react-slick';
import '../../../sections/HomePage/styles/Dashboard.scss';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', top: '65px', right: '120px' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', top: '65px', left: '150px' }}
      onClick={onClick}
    />
  );
}

export const Info = class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 600,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      appendDots: dots => (
        <div
          style={{
            margin: '0 auto',
            width: '130px',
            left: '200px',
            top: '50px',
          }}
        >
          <ul style={{ margin: '0 auto' }}> {dots} </ul>
        </div>
      ),
    };
    return (
      <div className="col-md-6">
        <h1>Tableau de bord</h1>
        <h3>Message à caractère informatif</h3>
        <div className="info">
          <Slider {...settings}>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dolores omnis quam
                quidem quisquam tempore?
              </p>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit pariatur perferendis
                possimus ut voluptates! Magni.
              </p>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, hic nulla quibusdam
                ratione sequi voluptate.
              </p>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
};
