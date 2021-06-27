import React from "react"
import PropTypes from "prop-types"

const Calculator = React.memo(({ calculator }) => {
  console.log("Calculator: ", calculator)
  return <div>{calculator.title}</div>
})

Calculator.propTypes = {
  calculator: PropTypes.object.isRequired,
}

export default Calculator

/*
Calculator {
  id
  rateSrc
  title
}
 */
