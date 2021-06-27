import React from "react"
import PropTypes from "prop-types"

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
