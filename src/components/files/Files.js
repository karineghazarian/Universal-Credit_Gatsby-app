import React from "react"
import PropTypes from "prop-types"
import File from "./File"

const Files = React.memo(({ files , title}) => (
  <div>
    {files?.map((fileObj,i) => (
      <File key={`${fileObj.id}-${i}`} file={fileObj.file} />
    ))}
  </div>
))

Files.defaultProps = {
  title: ""
}

Files.propTypes = {
  files: PropTypes.array.isRequired,
  title: PropTypes.string
}

export default Files
