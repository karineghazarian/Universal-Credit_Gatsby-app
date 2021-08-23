import React, { useState, useEffect } from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import * as styles from "./Header.module.css"
import { headerSelector } from "./selector"

const Header = React.memo(() =>
{
  const [hamburger, setHamburger] = useState(false);
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [rotate, setRotate] = useState(null);

  const onResize = () =>
  {
    const isSmall = window.innerWidth <= 1020;
    if (!hamburger)
    {
      setHamburger(isSmall)
      setShow(!isSmall);
      setRotate(false);
    }
  }

  useEffect(() =>
  {
    const isSmall = window.innerWidth <= 1020;
    setHamburger(isSmall);
    setShow(!isSmall);
    window.addEventListener("resize", onResize);
  }, [])

  useEffect(() =>
  {
    let timeout
    if (timeout)
    {
      clearTimeout(timeout)
    }
    if (open)
    {
      timeout = setTimeout(() =>
      {
        setShow(false);
        setOpen(false)
      }, 700);
    }
    return () =>
    {
      clearTimeout(timeout);
    }
  }, [open])

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

  return (
    <header className={hamburger ? styles.headerMain : styles.headerSection}>
      {hamburger &&
        <span tabIndex={0}
          className={rotate ?
            `${styles.menuBtn} ${styles.btnClicked}`
            : `${styles.menuBtn} ${styles.btnUnClicked}`}
          onClick={toggleMenu}>
          <i className={rotate ? styles.iconClose : styles.iconMenu} />
        </span>}
      <Link to={headerLogo.link} title={headerLogo.link}>
        <img
          src={headerLogo.icon.publicURL}
          alt={headerLogo.icon.name}
          className={styles.headerLogo}
        />
      </Link>
      <span style={{ flex: 1, padding: "1rem", fontSize: "1rem" }} />
      <nav className={styles.headerNavbar}>
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
})

export default Header
