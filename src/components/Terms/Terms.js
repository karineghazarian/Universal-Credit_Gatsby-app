import React from "react"
import PropTypes from "prop-types"

import * as styles from "./Terms.module.css";

const Terms = ({ terms, title }) =>
{

  console.log(title, terms)
  return (
    <div className={styles.termsContainer}>
      <h1 className={styles.termH1}>{title}</h1>
      <ul className={styles.termUl}>
        {
          terms.map((item, index) =>
          {
            console.log(`${process.env.GATSBY_URL}${item.file.publicURL}`, "000")
            return (
              <li className={styles.termLi}>
                <a href={`${process.env.GATSBY_URL}${item.file.publicURL}`}
                  target="__blank" className={styles.termLink}>
                  {item.text}
                </a>
              </li>
            )
          })
        }
      </ul>
      <hr />
    </div >
  )
}

Terms.defaultProps = {
  title: "",
  terms: [],
}

Terms.propTypes = {
  title: PropTypes.string,
  terms: PropTypes.array,
}

Terms.displayName = 'Terms'

export default React.memo(Terms)
