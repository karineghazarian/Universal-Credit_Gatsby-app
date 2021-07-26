import React from "react"
import PropTypes from "prop-types"

const ApplicationForm = React.memo(({ form, title }) => (
  //  console.log("ApplicationForm: ", form)
  <div>
    {title}
    ApplicationForm
  </div>
))

ApplicationForm.defaultProps = {
  title: ""
}

ApplicationForm.propTypes = {
  form: PropTypes.array.isRequired,
  title: PropTypes.string
}

export default ApplicationForm