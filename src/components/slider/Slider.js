import React from "react"
import PropTypes from "prop-types"

import * as styles from "./slider.module.css"

const Slide = React.memo(({ slide }) => (
  <div>
    <img src={slide.cover.publicURL} alt={slide.caption} />
    <h4>{slide.caption}</h4>
  </div>
))

Slide.propTypes = {
  slide: PropTypes.shape({
    caption: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    cover: PropTypes.shape({
      publicURL: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  }).isRequired,
}

const Slider = React.memo(({ slider }) => (
  <div className={styles.slider}>
    Slider
    {slider?.map(slide => (
      <Slide key={slide.id} slide={slide} />
    ))}
  </div>
))

Slider.propTypes = {
  slider: PropTypes.array.isRequired,
}

export default Slider
