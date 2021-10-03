import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

import * as styles from "./Rates.module.css"

const Rates = ({ src }) => {
  const [protocol, setProtocol] = useState(null)

  useEffect(() => {
    setProtocol(window.location.protocol)
  }, [])

  return (
    protocol && (
      <iframe
        title="rate-title"
        id="rate-widget"
        scrolling="no"
        frameBorder="no"
        src={`${protocol}${src.rateSrc}`}
        width="200px"
        height="150px"
        className={styles.rateWidget}
      />
    )
  )
}

Rates.propTypes = {
  src: PropTypes.object.isRequired,
}

Rates.displayName = "Rates"

export default React.memo(Rates)
