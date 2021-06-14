import React from "react"
import PropTypes from "prop-types"

import { graphql, Link, useStaticQuery } from "gatsby"
import { headerDataSelector } from "./selectors"
import * as styles from "./header.module.css"

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      allStrapiHeader {
        nodes {
          navbarItems {
            text
            page {
              path
              title
            }
          }
        }
      }
    }
  `)
  const { navbarItems } = headerDataSelector(data)
  return (
    <header>
      <nav>
        <ul className={styles.ul}>
          {navbarItems.map(link => (
            <li key={link.page.path} className={styles.link}>
              <Link to={`/${link.page.path}`} activeClassName={styles.active}>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

Header.defaultProps = {
  siteTitle: "home",
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default React.memo(Header)
