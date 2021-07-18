/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import "./layout.module.css"

import Header from "../header"
import Footer from "../footer"

const Layout = ({ children }) => (
  <>
    <Header />
    <main style={{ backgroundColor: "var(--main-color)" }}>{children}</main>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
