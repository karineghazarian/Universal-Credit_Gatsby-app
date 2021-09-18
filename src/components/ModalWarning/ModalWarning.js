import React from "react"
import PropTypes from "prop-types"
import Markdown from "../Markdown/Markdown"
import ModalPortal from "../ModalPortal/ModalPortal"

const ModalWarning = ({ modalWarning, title }) => {
  const [showModal, setShowModal] = React.useState(true)

  React.useEffect(() => {
    window.setTimeout(() => {
      setShowModal(false)
    }, 10 * 1000)
  }, [])

  return showModal ? (
    <ModalPortal header={title} onClose={() => setShowModal(false)}>
      <div>
        <Markdown markdown={modalWarning} />
      </div>
    </ModalPortal>
  ) : null
}

ModalWarning.defaultProps = {
  title: "",
}

ModalWarning.propTypes = {
  modalWarning: PropTypes.string.isRequired,
  title: PropTypes.string,
}

ModalWarning.displayName = "ModalWarning"

export default React.memo(ModalWarning)
