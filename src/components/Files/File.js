import React from "react"
import PropTypes from "prop-types"

const File = React.memo(({ file }) => (
  <div>{file.publicURL}</div>
))

File.propTypes = {
  file: PropTypes.object.isRequired,
}

export default File
