import React from "react";
import PropTypes from "prop-types"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import * as styles from "./License.module.css";

const License = ({ licenses, title }) =>
{
    console.log('license', licenses)

    return (
        <div className={styles.licenseContainer}>
            <h2>{title}</h2>
            <div className={styles.licenseImagesContainer}>
                {licenses.map(license =>
                {
                    const image = getImage(license.image);
                    return <GatsbyImage image={image} alt={license.name} className={styles.licenseImage} />
                })}
            </div>
        </div>
    );
}


License.defaultProps = {
    title: ""
}

License.propTypes = {
    licenses: PropTypes.array.isRequired,
    title: PropTypes.string
}


export default React.memo(License);

License.displayName = 'License';