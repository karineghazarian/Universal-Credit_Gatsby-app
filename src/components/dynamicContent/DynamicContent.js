import React from "react"
import PropTypes from "prop-types"

import Slider from "../slider"
import Markdown from "../markdown"
import CreditCards from "../creditCards"
import Warning from "../warning"
import ModalWarning from "../modalWarning"
import Map from "../map"
import ApplicationForm from "../applicationForm"
import Calculator from "../calculator"
import Files from "../files"

const CONTENT = {
  SLIDE: "Slide",
  MARKDOWN: "Markdown",
  CARD: "Card",
  WARNING: "Warning",
  MODALWARNING: "ModalWarning",
  MAP: "Map",
  APPLICATION: "ApplicationItem",
  CALCULATOR: "Calculator",
  FILE: "File",
}

const DynamicContent = React.memo(({ content }) =>
  Object.entries(content).map((prop, i) => {
    const [key, value] = prop
    if (!value || key === "id") {
      return null
    }

    const componentKey = `${key}-${content.id}-${i}`

    console.log(value)
    switch (key) {
      case CONTENT.SLIDE:
        return <Slider key={componentKey} slider={value} />
      case CONTENT.MARKDOWN:
        return <Markdown key={componentKey} markdown={value.markdown} />
      case CONTENT.CARD:
        return <CreditCards key={componentKey} cards={value} />
      case CONTENT.WARNING:
        return <Warning key={componentKey} warning={value.warning} />
      case CONTENT.MODALWARNING:
        return <ModalWarning key={componentKey} modalWarning={value.warning} />
      case CONTENT.MAP:
        return <Map key={componentKey} src={value.src} />
      case CONTENT.APPLICATION:
        return <ApplicationForm key={componentKey} form={value} />
      case CONTENT.CALCULATOR:
        return <Calculator key={componentKey} calculator={value} />
      case CONTENT.FILE:
        return <Files key={componentKey} files={value} />
      default:
        return null
    }
  })
)

DynamicContent.propTypes = {
  content: PropTypes.shape({
    id: PropTypes.number.isRequired,
    Slide: PropTypes.array,
    Markdown: PropTypes.object,
    Card: PropTypes.array,
    Warning: PropTypes.object,
    ModalWarning: PropTypes.object,
    Map: PropTypes.object,
    ApplicationItem: PropTypes.array,
    Calculator: PropTypes.object,
    File: PropTypes.array,
  }).isRequired,
}

export default DynamicContent
