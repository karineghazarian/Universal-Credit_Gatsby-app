import React from "react"
import PropTypes from "prop-types"

import * as styles from "./slider.module.css"
import Slide from "./Slide"

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
