import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

import * as styles from "./header.module.css"

import { headerSelector } from "./selector"

const Header = React.memo(() => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      allStrapiHeader {
        nodes {
          navbarItems {
            text
            id
            page {
              path
              title
            }
          }
          logoLink {
            link
            icon {
              publicURL
              name
            }
          }
          contactPhone {
            link
            text
            id
          }
        }
      }
    }
  `)
  const { navbarItems = [], logoLink = {}, contactPhone = [] } = headerSelector(
    data
  )
  return (
    <header>
      <Link to={`/${logoLink.link}`} title={logoLink.link}>
        <img
          src={logoLink.icon.publicURL}
          alt={logoLink.icon.name}
          style={{ width: "100px" }}
        />
      </Link>
      <nav>
        <ul className={styles.ul}>
          {navbarItems?.map(link => (
            <li key={link.page.path} className={styles.link}>
              <Link
                to={`/${link.page.path}`}
                activeClassName={styles.active}
                title={link.text}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <ul>
        {contactPhone?.map(phone => (
          <li key={phone.id} className={styles.link}>
            <a
              href={phone.link}
              title={phone.text}
              target="_blank"
              rel="noreferrer"
            >
              {phone.text}
            </a>
          </li>
        ))}
      </ul>
    </header>
  )
})

export default Header
