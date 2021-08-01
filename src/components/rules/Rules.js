import React from "react"
import PropTypes from "prop-types"

const Rules = React.memo(({ rules, title }) => 
  // console.log(title, rules)

   <div>Rules</div>
)

Rules.defaultProps = {
  title: "",
  rules: {},
}

Rules.propTypes = {
  title: PropTypes.string,
  rules: PropTypes.shape({
    file: PropTypes.shape({
      url: PropTypes.string,
      name: PropTypes.string,
    }),
  }),
}

export default Rules
