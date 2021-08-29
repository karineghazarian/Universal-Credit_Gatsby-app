import React from 'react';
import PropTypes from "prop-types";
import Markdown from "../Markdown/Markdown";

import * as styles from "./Leaders.module.css"

const Leaders = ({ leaders, title }) =>
{
  console.log(leaders)
  return (
    <div className={styles.leadersContainer}>
      {title && <p>{title}</p>}
      {leaders.map(leader => (
        <div key={leader.title} className={styles.leadsContainer}>
          {leader.title && <h2>{leader.title}</h2>}
          {leader.name && <h3>{leader.name}</h3>}
          <Markdown markdown={leader.markdown} />
        </div>
      ))}
    </div>
  );
}


Leaders.defaultProps = {
  title: ""
}

Leaders.propTypes = {
  leaders: PropTypes.array.isRequired,
  title: PropTypes.string
}

export default React.memo(Leaders);

Leaders.displayName = Leaders;