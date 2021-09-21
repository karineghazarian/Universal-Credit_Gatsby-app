import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Markdown from "../Markdown/Markdown"

import * as styles from "./Footer.module.css"

const Footer = () => {
  const {strapiFooter} = useStaticQuery(graphql`
    query MyFooter {
      strapiFooter {
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
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
            name
          }
        }
        icons {
          link
          icon {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
            name
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
  } = strapiFooter || {};

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
      {markdownRemark && (
        <Markdown
          markdown={markdownRemark.markdown}
          className={styles.footerWarning}
        />
      )}
      <div className={styles.footerCopywrite}>
        <Link to={footerLogo.link} title={footerLogo.link}>
          <GatsbyImage
            image={getImage(footerLogo.icon.localFile)}
            alt={footerLogo.icon.name}
            className={styles.footerLogo}
          />
        </Link>
        <ul className={styles.footerIcons}>
          {icons?.map(icon => {
            const link = icon.link.replace("/", "")
            return (
              <li key={`${icon.id}-${link}`} className={styles.footerIcon}>
                <a href={link} title={link} target="_blank" rel="noreferrer">
                  <GatsbyImage
                    image={getImage(icon.icon.localFile)}
                    alt={icon.icon.name}
                  />
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
