import React from "react"
import PropTypes from "prop-types"

import * as styles from "./Rules.module.css";

const Rules = ({ rules, title }) =>
{
  console.log(title, rules)
  return (
    <>
      <div className={styles.termsContainer}>
        <h2 className={styles.rulesH2}>{title}</h2>
        <div>
          <iframe style={{ height: "700px" }} src={`${rules.file.publicURL}`} width="100%"
            height="100%" title="title" />
        </div>
      </div>
    </>
  )
}

Rules.defaultProps = {
  title: "",
  rules: {},
}

Rules.propTypes = {
  title: PropTypes.string,
  rules: PropTypes.shape({
    file: PropTypes.shape({
      publicURL: PropTypes.string,
      name: PropTypes.string,
    }),
  }),
}

Rules.displayName = 'Rules'

export default React.memo(Rules);
