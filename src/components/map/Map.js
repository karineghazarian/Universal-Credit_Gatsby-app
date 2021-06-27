import React from "react"
import PropTypes from "prop-types"

const Map = React.memo(({ src }) => {
  console.log("Map: ", src)
  return <div>{src}</div>
})

Map.propTypes = {
  src: PropTypes.string.isRequired,
}

export default Map

/*
Map {
  src
}
 */
