import React, { useState, useEffect } from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Animated from "../Animated"

import * as styles from "./Header.module.css"

const Header = () => {
  const { strapiHeader } = useStaticQuery(graphql`
    query HeaderQuery {
      strapiHeader {
        headerLogo {
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
        navbarItems {
          text
          id
          page {
            path
            title
          }
        }
        contactPhone {
          link
          text
          id
        }
      }
    }
  `)

  const { navbarItems = [], headerLogo = {}, contactPhone = [] } =
    strapiHeader || {}

  const [hamburger, setHamburger] = useState(false)
  const [show, setShow] = useState(false)
  const [open, setOpen] = useState(false)
  const [rotate, setRotate] = useState(null)

  const timeoutIdRef = React.useRef()

  function onResize() {
    const isSmall = window.innerWidth <= 1024
    if (!hamburger) {
      setHamburger(isSmall)
      setShow(!isSmall)
      setRotate(false)
    }
  }

  const toggleIcon = () => {
    setRotate(!rotate)
  }

  const toggleMenu = () => {
    toggleIcon()
    if (show) {
      setOpen(!open)
    } else {
      setShow(true)
    }
  }

  useEffect(() => {
    const isSmall = window.innerWidth <= 1024
    setHamburger(isSmall)
    setShow(!isSmall)
    window.addEventListener("resize", onResize)

    return () => {
      window.removeEventListener("resize", onResize)
    }
  }, [])

  useEffect(() => {
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current)
    }
    if (open) {
      timeoutIdRef.current = setTimeout(() => {
        setShow(false)
        setOpen(false)
      }, 700)
    }
    return () => {
      clearTimeout(timeoutIdRef.current)
    }
  }, [open])

  return (
    <div className={styles.headerMain}>
      {hamburger && (
        <span
          tabIndex={0}
          className={`${styles.menuBtn} ${
            rotate ? styles.btnClicked : styles.btnUnClicked
          }`}
          onClick={toggleMenu}
        >
          <i
            className={
              rotate
                ? `${styles.iconClose} icon-close`
                : `${styles.iconMenu} icon-menu`
            }
          />
        </span>
      )}
      {show && (
        <Animated
          from={hamburger ? { transform: "translateX(-100%)" } : {}}
          to={hamburger ? { transform: "translateX(0%)" } : {}}
          inverse={open}
        >
          {style => (
            <header
              className={`${styles.header} ${
                hamburger ? styles.hamburgerHeader : ""
              }`}
              style={hamburger ? style : {}}
            >
              <Link
                to={headerLogo.link}
                title={headerLogo.link}
                className={styles.logoContainer}
              >
                <GatsbyImage
                  image={getImage(headerLogo.icon.localFile)}
                  alt={headerLogo.icon.name}
                  className={styles.headerLogo}
                />
              </Link>
              <div
                className={styles.navContainer}
                style={{
                  ...(hamburger ? {} : { margin: "0 auto" }),
                }}
              >
                <nav
                  className={styles.headerNavbar}
                  style={
                    hamburger
                      ? {
                          flexDirection: "column",
                        }
                      : {
                          justifyContent: "flex-end",
                        }
                  }
                >
                  {navbarItems?.map(
                    link =>
                      link.page.path !== "/home" && (
                        <Link
                          key={link.text}
                          to={link.page.path}
                          title={link.text}
                          className={styles.link}
                          activeClassName={styles.active}
                        >
                          {link.text}
                        </Link>
                      )
                  )}
                </nav>
              </div>
              <div className={styles.contactPhoneContainer}>
                {contactPhone?.map(phone => (
                  <a
                    key={phone.link}
                    className={styles.contactPhone}
                    href={phone.link}
                    title={phone.text}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {phone.text}
                  </a>
                ))}
              </div>
            </header>
          )}
        </Animated>
      )}
    </div>
  )
}

Header.displayName = "Header"

export default React.memo(Header)
