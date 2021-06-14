import React from "react"
import PropTypes from "prop-types"

import * as styles from "./slider.module.css"

const Slider = ({ slider }) => (
  <div className={styles.slider}>
    Slider
    {slider.map(imgData => (
      <div key={imgData.cover.id}>
        <img src={imgData.cover.publicURL} alt={imgData.caption} />
        <h4>{imgData.caption}</h4>
      </div>
    ))}
  </div>
)

Slider.propTypes = {
  slider: PropTypes.arrayOf(
    PropTypes.shape({
      caption: PropTypes.string,
      cover: PropTypes.shape({
        publicURL: PropTypes.string,
        id: PropTypes.string.isRequired,
      }),
    })
  ).isRequired,
}

export default Slider
