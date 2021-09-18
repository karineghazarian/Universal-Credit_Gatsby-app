import React from "react"
import PropTypes from "prop-types"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { getFile } from "../utils/getFile"

import * as styles from "./License.module.css"

const License = ({ licenses, title, allFile }) => (
  <div className={styles.licenseContainer}>
    {title && <h2>{title}</h2>}
    <div className={styles.licenseImagesContainer}>
      {licenses.map(license => (
        <GatsbyImage
          key={license.cover.name}
          image={getImage(getFile(allFile, license.cover.localFile___NODE))}
          alt={license.cover.name}
          className={styles.licenseImage}
        />
      ))}
    </div>
  </div>
)

License.defaultProps = {
  title: "",
}

License.propTypes = {
  licenses: PropTypes.array.isRequired,
  title: PropTypes.string,
  allFile: PropTypes.array.isRequired,
}

License.displayName = "License"

export default React.memo(License)
