import React from "react"
import PropTypes from "prop-types"

const Terms = ({ terms, title }) =>
{
  console.log(title, terms)
  return (
    <div>Terms</div>
  )
}

Terms.defaultProps = {
  title: "",
  terms: [],
}

Terms.propTypes = {
  title: PropTypes.string,
  terms: PropTypes.array,
}

export default React.memo(Terms)

Terms.displayName = 'Terms'
