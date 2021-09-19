import React from "react"
import PropTypes from "prop-types"
import Markdown from "../Markdown/Markdown"

import * as styles from "./Leaders.module.css"

const Leaders = ({ leaders, title }) => (
  <div className={styles.leadersContainer}>
    {title && <h2 className="pageTitle">{title}</h2>}
    {leaders.map(leader => (
      <div key={leader.title} className={styles.leadsContainer}>
        {leader.title && <h2 className="pageTitle">{leader.title}</h2>}
        {leader.name && <h3>{leader.name}</h3>}
        <Markdown
          markdown={leader.markdown}
          className={styles.markdownStyles}
        />
      </div>
    ))}
  </div>
)

Leaders.defaultProps = {
  title: "",
}

Leaders.propTypes = {
  leaders: PropTypes.array.isRequired,
  title: PropTypes.string,
}

Leaders.displayName = Leaders

export default React.memo(Leaders)
