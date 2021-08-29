import React from "react"
import PropTypes from "prop-types"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from "./Slide.module.css"

const Slide = ({ slide }) =>
{
  const image = getImage(slide.cover)
  return (
    <div className={styles.slideContainer}>
      <GatsbyImage image={image} alt={slide.caption} className="slider-image" />
      <h1 className={styles.slideCaption}>{slide.caption}</h1>
    </div>
  )
}

Slide.propTypes = {
  slide: PropTypes.shape({
    caption: PropTypes.string.isRequired,
    link: PropTypes.string,
    id: PropTypes.number.isRequired,
    cover: PropTypes.shape({
      publicURL: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  }).isRequired,
}

export default React.memo(Slide)

Slide.displayName = 'Slide'
