import React from "react"
import PropTypes from "prop-types"
import Carousel from "react-animated-carousel";
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Slide from "./Slide";

import "./slider.css"

const Slider = React.memo(({ slider, title }) => 
{

  const slides = slider?.map(slide =>
  {
    const image = getImage(slide.cover)
    return (
      <div>
        <GatsbyImage image={image} alt={slide.caption} className="slider-image" />
        <Link to={slide.link}>
          <h1>{slide.caption}</h1>
        </Link>
      </div>
    )
  });

  return (
    <div className="hero-container">
      {
        slider.length > 1 ?
          <Carousel slides={slides}
            animationType="SLIDE"
            duration={5000}
            withNavigation /> :
          <Slide slide={slider[0]} />
      }
    </div>
  )
})

Slider.defaultProps = {
  title: ""
}

Slider.propTypes = {
  slider: PropTypes.array.isRequired,
  title: PropTypes.string
}

export default Slider

Slider.displayName = 'Slider'

