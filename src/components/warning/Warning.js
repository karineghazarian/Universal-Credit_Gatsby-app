import React from "react"
import PropTypes from "prop-types"
import Markdown from "../markdown"

const Warning = React.memo(({ warning, title }) => (
  // console.log("Warning: ", warning)
  <div>
    {title}
    <Markdown markdown={warning} />
  </div>
))

Warning.defaultProps = {
  title: ""
}

Warning.propTypes = {
  warning: PropTypes.string.isRequired,
  title: PropTypes.string
}

export default Warning
