import React from "react"
import PropTypes from "prop-types"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { getFile } from "../utils/getFile"

const Structure = ({ structure, title, allFile }) => (
  <div>
    {title && <h2>{title}</h2>}
    <GatsbyImage
      image={getImage(getFile(allFile, structure.cover.localFile___NODE))}
      alt={structure.cover.name}
      style={{ width: "100%" }}
    />
  </div>
)

Structure.defaultProps = {
  title: "",
}

Structure.propTypes = {
  structure: PropTypes.object.isRequired,
  title: PropTypes.string,
  allFile: PropTypes.array.isRequired,
}

Structure.displayName = "Structure"

export default React.memo(Structure)
