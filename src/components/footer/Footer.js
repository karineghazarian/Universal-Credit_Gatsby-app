import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

import * as styles from "./footer.module.css"

import Markdown from "../markdown"

import { footerSelector } from "./selector"

const Footer = React.memo(() => {
  const data = useStaticQuery(graphql`
    query MyFooter {
      allStrapiFooter {
        nodes {
          navbarItems {
            id
            text
            page {
              path
            }
          }
          markdownRemark {
            Markdown
          }
          icons {
            id
            link
            icon {
              publicURL
            }
          }
        }
      }
    }
  `)
  const { navbarItems = [], markdownRemark = {}, icons = [] } = footerSelector(
    data
  )
  return (
    <footer>
      © {new Date().getFullYear()}
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
      {markdownRemark && <Markdown markdown={markdownRemark.Markdown} />}
      <ul>
        {icons?.map(icon => (
          <li key={icon.id} className={styles.link}>
            <a
              href={icon.link}
              title={icon.link}
              target="_blank"
              rel="noreferrer"
            >
              <img src={icon.icon.publicURL} alt={icon.link} />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  )
})

export default Footer
