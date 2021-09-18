import React from "react"
import PropTypes from "prop-types"
import { getFile } from "../utils/getFile"

import * as styles from "./Rules.module.css"

const Rules = ({ rules, title, allFile }) => {
  const file = getFile(allFile, rules.file.localFile___NODE)
  return (
    <div className={styles.termsContainer}>
      {title && <h2 className={styles.rulesH2}>{title}</h2>}
      <div>
        <iframe
          style={{ height: "700px" }}
          width="100%"
          height="100%"
          title="title"
          src={`${process.env.GATSBY_URL}${file?.publicURL}`}
        />
      </div>
    </div>
  )
}

Rules.defaultProps = {
  title: "",
}

Rules.propTypes = {
  title: PropTypes.string,
  rules: PropTypes.object.isRequired,
  allFile: PropTypes.array.isRequired,
}

Rules.displayName = "Rules"

export default React.memo(Rules)
