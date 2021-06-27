import React from "react"
import PropTypes from "prop-types"
import File from "./File"

const Files = React.memo(({ files }) => (
  <div>
    {files?.map(fileObj => (
      <File key={fileObj.id} file={fileObj.file} />
    ))}
  </div>
))

Files.propTypes = {
  files: PropTypes.array.isRequired,
}

export default Files
