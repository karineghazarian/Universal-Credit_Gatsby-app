import React from "react"
import PropTypes from "prop-types"
import Markdown from "../markdown"

const Warning = React.memo(({ warning }) => (
  <div style={{ background: "yellow" }}>
    <Markdown markdown={warning} />
  </div>
))

Warning.propTypes = {
  warning: PropTypes.string.isRequired,
}

export default Warning
