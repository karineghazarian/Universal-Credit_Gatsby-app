import React from "react"
import PropTypes from "prop-types"

import Slider from "../slider"
import Markdown from "../markdown"
import Cards from "../cards"
import Warning from "../warning"

const CONTENT = {
  SLIDE: "Slide",
  MARKDOWN: "Markdown",
  CARD: "Card",
  WARNING: "Warning",
}

const DynamicContent = React.memo(({ content }) => {
  console.log(content)
  return Object.entries(content).map((prop, i) => {
    const [key, value] = prop
    if (!value) {
      return null
    }
    switch (key) {
      case CONTENT.SLIDE:
        return <Slider key={`${content.id}-${i}`} slider={value} />
      case CONTENT.MARKDOWN:
        return <Markdown key={`${content.id}-${i}`} markdown={value} />
      case CONTENT.CARD:
        return <Cards key={`${content.id}-${i}`} cards={value} />
      case CONTENT.WARNING:
        return <Warning key={`${content.id}-${i}`} warning={value} />
      default:
        return null
    }
  })
})

DynamicContent.propTypes = {
  content: PropTypes.shape({
    id: PropTypes.number.isRequired,
    Markdown: PropTypes.string.isRequired,
    Slide: PropTypes.array.isRequired,
    Card: PropTypes.array.isRequired,
    Warning: PropTypes.string.isRequired,
  }).isRequired,
}

export default DynamicContent
