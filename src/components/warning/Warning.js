import React from "react"
import PropTypes from "prop-types"
import Markdown from "../markdown"

const Warning = React.memo(({ warning }) => {
  console.log("Warning: ", warning)
  return (
    <div>
      <Markdown markdown={warning} />
    </div>
  )
})

Warning.propTypes = {
  warning: PropTypes.string.isRequired,
}

export default Warning

/*
Warning {
  warning
}
 */
