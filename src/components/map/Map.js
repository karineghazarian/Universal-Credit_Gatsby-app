import React from "react"
import PropTypes from "prop-types"

const Map = React.memo(({ src, title }) => (
  // console.log("Map: ", src)
  <div>{src}</div>
))

Map.defaultProps = {
  title: ""
}

Map.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string
}

export default Map
