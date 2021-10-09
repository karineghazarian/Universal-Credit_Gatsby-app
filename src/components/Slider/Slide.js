import React from "react"
import PropTypes from "prop-types"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { getFile } from "../utils/getFile"

import * as styles from "./Slide.module.css"

const Slide = ({ slide, allFile }) => (
  <div className={styles.slideContainer}>
    <GatsbyImage
      image={getImage(getFile(allFile, slide.cover.localFile___NODE))}
      alt={slide.cover.name}
      className="slider-image"
    />
    {!!slide?.caption && <h1 className={styles.slideCaption}>{slide.caption}</h1>}
  </div>
)

Slide.propTypes = {
  slide: PropTypes.object.isRequired,
  allFile: PropTypes.array.isRequired,
}

Slide.displayName = "Slide"

export default React.memo(Slide)
