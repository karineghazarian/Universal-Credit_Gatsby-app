import React from "react"
import PropTypes from "prop-types"
import Markdown from "../Markdown/Markdown"
import * as styles from "./Warning.module.css"

const Warning = ({ warning, title }) =>
(
  <div className={`${styles.warning} container`}>
    <strong>{title}</strong>
    <Markdown markdown={warning} className={styles.warningContainer} />
  </div>
)

Warning.defaultProps = {
  title: ""
}

Warning.propTypes = {
  warning: PropTypes.string.isRequired,
  title: PropTypes.string
}

Warning.displayName = 'Warning';

export default React.memo(Warning)
