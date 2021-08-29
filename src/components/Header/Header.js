import React, { useState, useEffect } from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

import { headerSelector } from "./selector"
import Animated from "../Animated";

import * as styles from "./Header.module.css"

const Header = () =>
{
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      allStrapiHeader {
        nodes {
          headerLogo {
            link
            icon {
              publicURL
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
    }
  `)
  const {
      navbarItems = [],
      headerLogo = {},
      contactPhone = [],
  } = headerSelector(data);

  const [hamburger, setHamburger] = useState(false);
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [rotate, setRotate] = useState(null);

  const navContainerRef = React.useRef();
  const navRef = React.useRef();
  const timeoutIdRef = React.useRef();

  const onResize = () =>
  {
    const isSmall = window.innerWidth <= 1024;
    if (!hamburger)
    {
      setHamburger(isSmall)
      setShow(!isSmall);
      setRotate(false);
    }
  }

  const toggleIcon = () =>
  {
    setRotate(!rotate)
  }

  const toggleMenu = (e) =>
  {
    toggleIcon();
    if (show)
    {
      setOpen(!open)
    } else
    {
      setShow(true)
    }
  }

  const onBlur = (e) =>
  {
    // if (e.relatedTarget && e.target)
    //     if (e.relatedTarget.tabIndex !== e.target.tabIndex)
    //     {
    //         if (rotate)
    //         {
    //             toggleMenu(e)
    //         }
    //     }
  }

  useEffect(() =>
  {
    const isSmall = window.innerWidth <= 1024;
    setHamburger(isSmall);
    setShow(!isSmall);
    window.addEventListener("resize", onResize);
    // eslint-disable-next-line
  }, [])

  useEffect(() =>
  {
    if (timeoutIdRef.current)
    {
      clearTimeout(timeoutIdRef.current)
    }
    if (open)
    {
      timeoutIdRef.current = setTimeout(() =>
      {
        setShow(false);
        setOpen(false)
      }, 700);
    }
    return () =>
    {
      clearTimeout(timeoutIdRef.current);
    }
  }, [open])

  return (
    <div className={styles.headerMain}>
      {hamburger && (
        <span
          tabIndex={0}
          className={`${styles.menuBtn} ${rotate ? styles.btnClicked : styles.btnUnClicked}`}
          onClick={toggleMenu}
        >
           <i className={rotate ? `${styles.iconClose} icon-close` : `${styles.iconMenu} icon-menu`}/>
        </span>
      )}
      {show && (
        <Animated
          from={hamburger ? { transform: "translateX(-100%)" } : {}}
          to={hamburger ? { transform: "translateX(0%)" } : {}}
          inverse={open}
        >
          {
            style => (
              <header
                className={`${styles.header} ${hamburger ? styles.hamburgerHeader: ""}`}
                style={hamburger ? style : {}}
              >
                <Link to={headerLogo.link} title={headerLogo.link}>
                  <img
                    src={headerLogo.icon.publicURL}
                    alt={headerLogo.icon.name}
                    className={styles.headerLogo}
                  />
                </Link>
                <div ref={navContainerRef}
                     className={styles.navContainer}
                     style={{
                       boxShadow: (
                         navRef.current?.offsetWidth > navContainerRef.current?.offsetWidth
                           ? "inset 0 2px 5px 0 rgba(0, 0, 0, 0.14)" : "none"
                       ),
                       ...(hamburger ? {}: { margin: "0 auto" }),
                     }}
                >
                  <nav
                    className={styles.headerNavbar} ref={navRef}
                    style={hamburger ? {
                      flexDirection: 'column',
                    }: {
                      justifyContent: 'flex-end'
                    }}
                  >
                    {navbarItems?.map(link => link.page.path !== "/home" && (
                      <Link
                        to={link.page.path}
                        title={link.text}
                        className={styles.link}
                        activeClassName={styles.active}
                      >
                        {link.text}
                      </Link>
                    ))}
                  </nav>
                </div>
                <div className={styles.contactPhoneContainer}>
                  {contactPhone?.map(phone => (
                    <a
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
            )
          }
        </Animated>
      )}
    </div>
  )
}

Header.displayName = "Header"

export default React.memo(Header);


