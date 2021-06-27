import React from "react"
import PropTypes from "prop-types"

const ApplicationForm = React.memo(({ form }) => {
  console.log("ApplicationForm: ", form)
  return <div>ApplicationForm</div>
})

ApplicationForm.propTypes = {
  form: PropTypes.array.isRequired,
}

export default ApplicationForm

/*
Fragment_ApplicationIte.js {
  item
  placeholder
  type
  id
}
 */
