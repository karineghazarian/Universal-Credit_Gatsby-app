import React from "react"
import PropTypes from "prop-types"

const Rules = ({ rules, title }) =>
{
  console.log(title, rules)
  return (
    <div>rules</div >
  )
}

Rules.defaultProps = {
  title: "",
  rules: {},
}

Rules.propTypes = {
  title: PropTypes.string,
  rules: PropTypes.shape({
    file: PropTypes.shape({
      publicURL: PropTypes.string,
      name: PropTypes.string,
    }),
  }),
}

Rules.displayName = 'Rules'

export default React.memo(Rules);
