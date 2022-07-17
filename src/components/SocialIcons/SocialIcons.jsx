import React from 'react';
import PropTypes from "prop-types";

import { Link } from "gatsby";

import * as styles from './SocialIcons.module.css';

function SocialIcons({ socialLinks = [] }) {
  return (
    <div className={styles.socialLinks}>
      {socialLinks.map((social) => (
        <Link
          key={social.id}
          to={social.link}
          title={social.link}
          className={styles.linkContainer}
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={social.icon?.localFile?.publicURL}
            alt={social.icon.name}
            className={styles.socialLogo}
          />
        </Link>
      ))}
    </div>
  );
}

SocialIcons.propTypes = {
  socialLinks: PropTypes.array.isRequired,
}

SocialIcons.displayName = 'SocialIcons';

export default React.memo(SocialIcons);
