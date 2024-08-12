/* eslint-disable react/prop-types */
import "./SliderComponent.css";
import Slider from "react-slick";

function SliderComponent({ children }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="SliderConfig">
      <div className="slider-container">
        <Slider {...settings}>{children}</Slider>
      </div>
    </div>
  );
}
export default SliderComponent;
