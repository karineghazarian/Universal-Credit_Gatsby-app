import React from "react"
import PropTypes from "prop-types"

const Footer = () => {
  debugger
  return <footer>© {new Date().getFullYear()}, Built with </footer>
}

// Footer.defaultProps = {}
// Footer.propTypes = {}

export default React.memo(Footer)
