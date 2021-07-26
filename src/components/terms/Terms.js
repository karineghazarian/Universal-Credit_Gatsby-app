import React from "react"
import PropTypes from "prop-types"

const Terms = React.memo(({ terms, title }) => 
  // console.log(title, terms)

   <div>Terms</div>
)

Terms.defaultProps = {
  title: "",
  terms: [],
}

Terms.propTypes = {
  title: PropTypes.string,
  terms: PropTypes.array,
}

export default Terms
