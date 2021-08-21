import React from "react"
import PropTypes from "prop-types"
import Markdown from "../markdown"

const ModalWarning = React.memo(({ modalWarning, title }) => (
  //  console.log("ModalWarning: ", modalWarning)
  <div>
    {title}
    <Markdown markdown={modalWarning} />
  </div>
))

ModalWarning.defaultProps = {
  title: ""
}

ModalWarning.propTypes = {
  modalWarning: PropTypes.string.isRequired,
  title: PropTypes.string
}

export default ModalWarning
