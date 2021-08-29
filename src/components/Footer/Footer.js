import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

import { footerSelector } from "./selector"
import Markdown from "../Markdown/Markdown"

import * as styles from "./Footer.module.css"

const Footer = () =>
{
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
      <nav>
        <ul className={styles.ul}>
          {navbarItems?.map(link => (
            <li key={link.page.path} className={styles.link}>
              <Link
                to={link.page.path}
                activeClassName={styles.active}
                title={link.text}
                className={styles.navbarItem}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {markdownRemark && <Markdown markdown={markdownRemark.markdown} className={styles.footerWarning} />}
      <div className={styles.footerCopywrite}>
        <Link to={footerLogo.link} title={footerLogo.link}>
          <img
            src={footerLogo.icon.publicURL}
            alt={footerLogo.icon.name}
            className={styles.footerLogo}
          />
        </Link>
        <ul className={styles.footerIcons}>
          {icons?.map(icon =>
          {
            const link = icon.link.replace("/", "")
            const imgSrc = icon.icon.publicURL
            return (
              <li key={`${icon.id}-${link}`} className={styles.footerIcon}>
                <a href={link} title={link} target="_blank" rel="noreferrer">
                  <img src={imgSrc} alt={link} />
                </a>
              </li>
            )
          })}
        </ul>
        <span>© {new Date().getFullYear()}, Universal Credit</span>
      </div>
    </footer>
  )
}

Footer.displayName = "Footer"

export default React.memo(Footer)
