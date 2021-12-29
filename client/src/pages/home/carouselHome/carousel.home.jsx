import React, { Component } from "react";
import Slider from "react-slick";
import "./carousel.home.scss";
class CarouselHome extends Component {
  render() {
    const settings = {
      // dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      autoplay: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings} className="carousel">
          <div className="imageCarousel">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1L47yPNo10WtbGDw2aXsS_8EfUkbblPRVtQ&usqp=CAU"
              alt=""
            />
          </div>
          <div className="imageCarousel">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ0Bmv_8mXb_uNcPDz20YSWUPXpJ9KGXDX5Q&usqp=CAU"
              alt=""
            />
          </div>
          <div className="imageCarousel">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAcEiUcOu0nbaDJOydn55lLZajzRBMJECT-g&usqp=CAU"
              alt=""
            />
          </div>
        </Slider>
      </div>
    );
  }
}

export default CarouselHome;
