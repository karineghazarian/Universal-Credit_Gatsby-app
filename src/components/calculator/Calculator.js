import React from "react"
import PropTypes from "prop-types"

const Calculator = React.memo(({ calculator, title }) => (
  // console.log("Calculator: ", calculator)
  <div>{title}</div>
))

Calculator.defaultProps = {
  title: "",
}

Calculator.propTypes = {
  calculator: PropTypes.object.isRequired,
  title: PropTypes.string
}

export default Calculator