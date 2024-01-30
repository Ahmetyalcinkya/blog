import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const BlogSlider = ({ images }) => {
  return (
    <AutoplaySlider
      play={true}
      cancelOnInteraction={true}
      interval={6000}
      className="h-96 object-cover"
    >
      {images?.map((image) => (
        <div data-src={image} />
      ))}
    </AutoplaySlider>
  );
};

export default BlogSlider;
