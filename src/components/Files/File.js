import React from "react"
import PropTypes from "prop-types"

import * as styles from "./Files.module.css"

const File = React.memo(({ fileObj }) =>
{
  console.log(fileObj)
  return (
    <a href={`${process.env.GATSBY_URL}${fileObj.file.publicURL}`}
      target="__blank" className={styles.fileLink}>{fileObj.text}</a>
  )
})

File.propTypes = {
  fileObj: PropTypes.object.isRequired,
}

export default File
