import React from "react"
import PropTypes from "prop-types"

import Slider from "../slider/Slider"
import Markdown from "../markdown/Markdown"

const CONTENT = {
  SLIDE: "slide",
  MARKDOWN: "markdown",
}

const DynamicContent = ({ content }) =>
  Object.entries(content).map((prop, i) => {
    const [key, value] = prop
    if (!value) {
      return null
    }
    switch (key) {
      case CONTENT.SLIDE:
        return <Slider key={`${content.id}-${i}`} slider={value} />
      case CONTENT.MARKDOWN:
        return <Markdown key={`${content.id}-${i}`} markdown={value} />
      default:
        return null
    }
  })

DynamicContent.propTypes = {
  content: PropTypes.shape({
    id: PropTypes.number.isRequired,
    markdown: PropTypes.string,
    slide: PropTypes.array,
  }).isRequired,
}

export default React.memo(DynamicContent)
