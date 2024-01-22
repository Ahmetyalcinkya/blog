import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import Pic1 from "../Assets/Java-cover.png";
import Pic2 from "../Assets/JavaScript-cover.png";
import Pic3 from "../Assets/Python-cover.png";
import Pic4 from "../Assets/React-cover.jpg";
import Pic5 from "../Assets/c-cover.jpg";
import Pic6 from "../Assets/go-cover.jpg";
import Pic7 from "../Assets/kotlin-cover.png";
import Pic8 from "../Assets/php-cover.jpg";
import Pic9 from "../Assets/swift-cover.jpg";
import Pic10 from "../Assets/typescript-cover.png";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = () => {
  return (
    <AutoplaySlider
      play={false}
      cancelOnInteraction={true}
      interval={6000}
      className="h-96 object-cover"
    >
      <div data-src={Pic1} />
      <div data-src={Pic2} />
      <div data-src={Pic3} />
      <div data-src={Pic4} />
      <div data-src={Pic5} />
      <div data-src={Pic6} />
      <div data-src={Pic7} />
      <div data-src={Pic8} />
      <div data-src={Pic9} />
      <div data-src={Pic10} />
    </AutoplaySlider>
  );
};

export default Slider;
