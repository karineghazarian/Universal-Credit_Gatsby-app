import React, { useState, useEffect } from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import * as styles from "./header.module.css"
import { headerSelector } from "./selector"
import "./style.css"
import Animated from "../Animated";

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

  useEffect(() =>
  {
    const isSmall = window.innerWidth <= 1020;
    setHamburger(isSmall);
    setShow(!isSmall);
    window.addEventListener("resize", onResize);

  }, [onResize])

  useEffect(() =>
  {
    let timeoutId
    if (timeoutId)
    {
      clearTimeout(timeoutId)
    }
    if (open)
    {
      timeoutId = setTimeout(() =>
      {
        setShow(false);
        setOpen(false)
      }, 700);
    }
    return () =>
    {
      clearTimeout(timeoutId);
    }
  }, [open])

  console.log({open, show, hamburger})
  return (
    <header className={hamburger ?  "headerMain" : styles.headerSection}>
      {hamburger &&
        <span
          tabIndex={0}
          className={rotate ? "menuBtn btnClicked" : "menuBtn btnUnClicked"}
          onClick={toggleMenu}
        >
           <i className={rotate ? "icon-close" : "icon-menu"} />
        </span>
      }
      {hamburger && show && (
        <Animated
            from={{transform: "translateX(-100%)"}}
            to={{transform: "translateX(0%)"}}
            inverse={open}
          >
          {
            style => (
              <header style={style}>
                <Link to="/" className="logo" />
                <Link to="/about" activeClassName="active">ՄԵՐ ՄԱՍԻՆ</Link>
                <Link to="/credits" activeClassName="active" partiallyActive>ՎԱՐԿԵՐ</Link>
                <Link to="/careers" activeClassName="active">ԹԱՓՈՒՐ ԱՇԽԱՏԱՏԵՂԵՐ</Link>
                <Link to="/reports" activeClassName="active">ՀԱՇՎԵՏՎՈՒԹՅՈՒՆՆԵՐ</Link>
                <Link to="/contact-us" activeClassName="active">ՀԵՏԱԴԱՐՁ ԿԱՊ</Link>
                <div>
                  <a href="tel:+374 10 57 35 47">(+374) 10 57 35 47</a>
                  <a href="tel:+374 10 57 56 61">(+374) 10 57 56 61</a>
                </div>
              </header>
            )
          }
        </Animated>
      )}
      <Link to={headerLogo.link} title={headerLogo.link}>
        <img
          src={headerLogo.icon.publicURL}
          alt={headerLogo.icon.name}
          className={styles.headerLogo}
        />
      </Link>
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
}

export default React.memo(Header);

Header.displayName = 'Header'
