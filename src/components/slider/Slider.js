import React from "react"
import PropTypes from "prop-types"

import * as styles from "./slider.module.css"
import Slide from "./Slide"

const Slider = React.memo(({ slider, title }) => (
  <div className={styles.slider}>
    Slider {title}
    {slider?.map(slide => (
      <Slide key={slide.id} slide={slide} />
    ))}
  </div>
))

Slider.defaultProps = {
  title: ""
}

Slider.propTypes = {
  slider: PropTypes.array.isRequired,
  title: PropTypes.string
}

export default Slider
