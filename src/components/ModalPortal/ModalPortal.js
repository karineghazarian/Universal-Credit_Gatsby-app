import React from "react"
import PropTypes from "prop-types"
import Animated from "../Animated"
import Portal from "../Portal"
import "./ModalPortal.css"

function ModalPortal({ onClose, header, children })
{
  return (
    <Portal>
      <div className="modal-backdrop" onClick={onClose}>
        <Animated
          delay={50}
          from={{ transform: "translateY(-20%)", opacity: 0 }}
          to={{ transform: "translateY(0%)", opacity: 1 }}
        >
          {style => (
            <div
              style={style}
              className="modal-main"
              onClick={e => e.stopPropagation()}
            >
              {header && (
                <div className="modal-head">
                  {header}
                  <i
                    className="icon-close"
                    onClick={onClose}
                    style={{ float: "right", marginRight: 7 }}
                  />
                </div>
              )}
              <div className="warning-modal-content">{children}</div> 
            </div>
          )}
        </Animated>
      </div>
    </Portal>
  )
}

export default ModalPortal

ModalPortal.propTypes = {
  onClose: PropTypes.func.isRequired,
  header: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}
