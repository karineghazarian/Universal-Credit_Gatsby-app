import React from "react"
import PropTypes from "prop-types"

const Map = React.memo(({ src, title }) => (
  // console.log("Map: ", src)
  <iframe
    src={src}
    width="100%"
    height="600"
    frameBorder="0"
    style={{ display: "block", border: 0, marginBottom: 0 }}
    allowFullScreen=""
    title="map-address"
  />
))

Map.defaultProps = {
  title: ""
}

Map.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string
}

export default Map
