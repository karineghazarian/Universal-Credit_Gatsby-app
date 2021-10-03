/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

import "./Layout.css"

import Header from "../Header/Header"
import Footer from "../Footer/Footer"

const Layout = ({ children }) => (
  <>
    <Helmet>
      <script src="//code.jivosite.com/widget/J1pQ8q6Oqr" async />
    </Helmet>
    <Header />
    <main className="mainStyles">
      {children}
    </main>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

Layout.displayName = "Layout"

export default Layout
