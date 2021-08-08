import React from "react"
import PropTypes from "prop-types"
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as styles from "./slide.module.css"


const Slide = React.memo(({ slide }) =>
{
  console.log(slide, "slide!");
  const image = getImage(slide.cover)

  return (
    <div>
      <GatsbyImage image={image} alt={slide.caption} className="slider-image" />
      <h1 className={styles.slideCaption}>{slide.caption}</h1>
    </div>
  )

})

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

export default Slide
/*
Slide {
  id
  caption
  cover {
    publicURL
    name
  }
}
 */
