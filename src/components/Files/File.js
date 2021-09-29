import React from "react"
import PropTypes from "prop-types"

import * as styles from "./Files.module.css"

const File = ({ fileObj }) => (
  <a
    href={`${fileObj.file.url}`}
    target="__blank"
    className={styles.fileLink}
  >
    {fileObj.text}
  </a>
)

File.propTypes = {
  fileObj: PropTypes.object.isRequired,
}

File.displayName = "File"

export default React.memo(File)
