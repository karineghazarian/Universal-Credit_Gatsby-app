import React from "react"
import PropTypes from "prop-types"
import Carousel from "react-animated-carousel";
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "./slider.css"
import Slide from "./Slide"

const Slider = React.memo(({ slider, title }) => 
{
  console.log("mtav slider", slider)
  const slides = slider?.map(slide =>
  {
    const image = getImage(slide.cover)
    return (
      <div>
        <GatsbyImage image={image} alt={slide.caption} className="slider-image" />
        <Link to="/home">
          <h1>{slide.caption}</h1>
        </Link>
      </div>
    )
  });
  console.log(slides, "slides", slider, "slider")

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
