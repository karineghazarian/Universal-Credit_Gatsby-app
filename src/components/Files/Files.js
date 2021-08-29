import React from "react"
import PropTypes from "prop-types"
import File from "./File"

const Files = ({ files, title }) =>
{
  console.log(files, title)
  return (
    <div className="container">
      <h2>{title}</h2>
      {files?.map((fileObj, i) => (
        <File key={`${fileObj.id}-${i}`} file={fileObj.file} />
      ))}
    </div>
  )
}

Files.defaultProps = {
  title: ""
}

Files.propTypes = {
  files: PropTypes.array.isRequired,
  title: PropTypes.string
}

Files.displayName = 'Files'

export default React.memo(Files)