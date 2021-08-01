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
import QuarterReport from "../quarterReport/QuarterReport"
import YearlyReport from "../yearlyReport/YearlyReport"
import Rules from "../rules/Rules"
import Terms from "../terms/Terms"

const CONTENT = {
  SLIDE: "Slide",
  MARKDOWN: "Markdown",
  CARD: "Card",
  WARNING: "Warning",
  MODALWARNING: "ModalWarning",
  MAP: "Map",
  APPLICATION: "ApplicationItem",
  CALCULATOR: "Calculator",
  FILES: "Files",
  QUARTER_REPORT: "QuarterReport",
  YEARLY_REPORT: "YearlyReport",
  RULES: "Rules",
  TERMS: "Terms",
}

const DynamicContent = React.memo(({ content }) => {
  const components = [];
  Object.entries(content).forEach((prop, i) => {
    const [key, value] = prop
    if (!value || key === "id" || key === 'title') {
      return;
    }
    switch (key) {
       case CONTENT.SLIDE:
         components.push({
           Component: Slider,
           props: {
             key,
             slider: value,
             title: content.title
           }
         })
         break;
       case CONTENT.MARKDOWN:
         components.push({
           Component: Markdown,
           props: {
             key,
             markdown: value.markdown,
             title: content.title
           }
         })
         break;
       case CONTENT.CARD:
         components.push({
           Component: CreditCards,
           props: {
             key,
             cards: value,
             title: content.title
           }
         })
         break;
       case CONTENT.WARNING:
         components.push({
           Component: Warning,
           props: {
             key,
             warning: value.warning,
             title: content.title
           }
         })
         break;
       case CONTENT.MODALWARNING:
         components.push({
           Component: ModalWarning,
           props: {
             key,
             modalWarning: value.warning,
             title: content.title
           }
         })
         break;
       case CONTENT.MAP:
         components.push({
           Component: Map,
           props: {
             key,
             src: value.src,
             title: content.title
           }
         })
         break;
       case CONTENT.APPLICATION:
         components.push({
           Component: ApplicationForm,
           props: {
             key,
             form: value,
             title: content.title
           }
         })
         break;
       case CONTENT.CALCULATOR:
         components.push({
           Component: Calculator,
           props: {
             key,
             calculator: value,
             title: content.title
           }
         })
         break;
       case CONTENT.FILES:
         components.push({
           Component: Files,
           props: {
             key,
             files: value,
             title: content.title
           }
         })
         break;
       case CONTENT.QUARTER_REPORT:
         components.push({
           Component: QuarterReport,
           props: {
             key,
             reports: value,
             title: content.title
           }
         })
         break;
       case CONTENT.YEARLY_REPORT:
         components.push({
           Component: YearlyReport,
           props: {
             key,
             reports: value,
             title: content.title
           }
         })
         break;
       case CONTENT.RULES:
         components.push({
           Component: Rules,
           props: {
             key,
             rules: value,
             title: content.title
           }
         })
         break;
       case CONTENT.TERMS:
         components.push({
           Component: Terms,
           props: {
             key,
             terms: value,
             title: content.title
           }
         })
         break;
       default:
         break;
    }
  })


  return components.map(({Component = null, props = {}}) => 
    // eslint-disable-next-line react/prop-types,react/jsx-props-no-spreading
     Component ? <Component {...props} /> : null
  )
  
})

DynamicContent.propTypes = {
  content: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    Slide: PropTypes.array,
    Markdown: PropTypes.object,
    Card: PropTypes.array,
    Warning: PropTypes.object,
    ModalWarning: PropTypes.object,
    Map: PropTypes.object,
    ApplicationItem: PropTypes.array,
    Calculator: PropTypes.object,
    File: PropTypes.array,
    QuarterReport: PropTypes.array,
    YearlyReport: PropTypes.array,
  }).isRequired,
}

export default DynamicContent
