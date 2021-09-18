import React from "react"
import PropTypes from "prop-types"
import File from "./File"

import * as styles from "./Files.module.css"

const Files = ({ files, title }) => (
  <div className={styles.filesContainer}>
    {title && <h2>{title}</h2>}
    <ul className={styles.fileUl}>
      {files?.map((fileObj, i) => (
        <li key={`${fileObj.id}-${i}`} className={styles.fileLi}>
          <File fileObj={fileObj} />
        </li>
      ))}
    </ul>
  </div>
)

Files.defaultProps = {
  title: "",
}

Files.propTypes = {
  files: PropTypes.array.isRequired,
  title: PropTypes.string,
}

Files.displayName = "Files"

export default React.memo(Files)
