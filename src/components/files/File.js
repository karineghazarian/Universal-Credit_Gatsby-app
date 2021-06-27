import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const File = React.memo(({ file }) => {
  console.log("File: ", file)
  return <div>{file.publicURL}</div>
})

File.propTypes = {
  file: PropTypes.object.isRequired,
}

export default File
