import React from "react"
import PropTypes from "prop-types"

import * as styles from "./Terms.module.css"

const Terms = ({ terms, title }) => (
  <div className={styles.termsContainer}>
    {title && <h2 className={`${styles.termsTitle} pageTitle`}>{title}</h2>}
    <ul className={styles.termUl}>
      {terms.map(item => (
        <li key={item.id} className={styles.termLi}>
          <a
            href={`${item.file.url}`}
            target="__blank"
            className={styles.termLink}
          >
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  </div>
)

Terms.defaultProps = {
  title: "",
  terms: [],
}

Terms.propTypes = {
  title: PropTypes.string,
  terms: PropTypes.array,
}

Terms.displayName = "Terms"

export default React.memo(Terms)
