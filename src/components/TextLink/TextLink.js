import React from "react"
import PropTypes from "prop-types"

import * as styles from "./TextLink.module.css"

const TextLink = ({ textLinks, title }) => (
  <div className={styles.textLinkContainer}>
    {title && <h2 className={`${styles.textLinkTitle} pageTitle`}>{title}</h2>}
    <ul className={styles.textLinkUl}>
      {textLinks.map(item => (
        <li key={item.id} className={styles.textLinkLi}>
          <a
            href={`${item.link}`}
            target="__blank"
            className={styles.textLink}
            title={item.link}
          >
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  </div>
)

TextLink.defaultProps = {
  title: "",
  textLinks: [],
}

TextLink.propTypes = {
  title: PropTypes.string,
  textLinks: PropTypes.array,
}

TextLink.displayName = "Terms"

export default React.memo(TextLink)

