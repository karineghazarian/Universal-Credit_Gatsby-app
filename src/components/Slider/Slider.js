import React from "react"
import PropTypes from "prop-types"
import Carousel from "react-animated-carousel"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Slide from "./Slide"
import { getFile } from "../utils/getFile"

import "./Slider.css"

const Slider = ({ slider, title, allFile }) => {
  const slides = slider?.map(slide => (
    <div>
      <GatsbyImage
        image={getImage(getFile(allFile, slide.cover.localFile___NODE))}
        alt={slide.cover.name}
        className="slider-image"
      />
      {slide?.page?.path ? (
        <Link to={slide.page.path}>
          <h1>{slide.caption}</h1>
        </Link>
      ) : !!slide?.caption && (
        <h1>{slide.caption}</h1>
      )}
    </div>
  ))

  return (
    <div className="hero-container">
      {title && <h2 className="pageTitle">{title}</h2>}
      {slider.length > 1 ? (
        <Carousel
          slides={slides}
          animationType="SLIDE"
          duration={5000}
          withNavigation
        />
      ) : (
        <Slide slide={slider[0]} allFile={allFile} />
      )}
    </div>
  )
}

Slider.defaultProps = {
  title: "",
}

Slider.propTypes = {
  slider: PropTypes.array.isRequired,
  title: PropTypes.string,
  allFile: PropTypes.array.isRequired,
}

Slider.displayName = "Slider"

export default React.memo(Slider)
