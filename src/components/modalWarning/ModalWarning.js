import React from "react"
import PropTypes from "prop-types"
import Markdown from "../markdown"

const ModalWarning = React.memo(({ modalWarning }) => {
  console.log("ModalWarning: ", modalWarning)
  return (
    <div>
      <Markdown markdown={modalWarning} />
    </div>
  )
})

ModalWarning.propTypes = {
  modalWarning: PropTypes.string.isRequired,
}

export default ModalWarning

/*
ModalWarning {
  warning
}
 */
