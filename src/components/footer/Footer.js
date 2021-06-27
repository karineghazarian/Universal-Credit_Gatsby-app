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
            markdown
          }
          footerLogo {
            link
            icon {
              publicURL
              name
            }
          }
          icons {
            link
            icon {
              publicURL
              name
            }
          }
        }
      }
    }
  `)
  const {
    navbarItems = [],
    markdownRemark,
    icons = [],
    footerLogo = {},
  } = footerSelector(data)

  return (
    <footer className={styles.footer}>
      © {new Date().getFullYear()}
      <nav>
        <ul className={styles.ul}>
          {navbarItems?.map(link => (
            <li key={link.page.path} className={styles.link}>
              <Link
                to={link.page.path}
                activeClassName={styles.active}
                title={link.text}
              >
                {link.text}
              </Link>
            </li>
          ))}
          =
        </ul>
      </nav>
      {markdownRemark && <Markdown markdown={markdownRemark.markdown} />}
      <ul>
        {icons?.map(icon => {
          const link = icon.link.replace("/", "")
          const imgSrc = icon.icon.publicURL
          return (
            <li key={`${icon.id}-${link}`} className={styles.link}>
              <a href={link} title={link} target="_blank" rel="noreferrer">
                <img src={imgSrc} alt={link} />
              </a>
            </li>
          )
        })}
      </ul>
      <Link to={footerLogo.link} title={footerLogo.link}>
        <img
          src={footerLogo.icon.publicURL}
          alt={footerLogo.icon.name}
          style={{ width: "100px" }}
        />
      </Link>
    </footer>
  )
})

export default Footer
