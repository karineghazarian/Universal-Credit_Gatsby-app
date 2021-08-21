import React from 'react';
import PropTypes from "prop-types";
import Markdown from "../markdown";

const Leaders = ({ leaders, title }) => (
    <div>
      {title && <p>{title}</p>}
      {leaders.map(leader => (
        <div key={leader.title}>
          {leader.title && <p>{leader.title}</p>}
          {leader.name && <p>{leader.name}</p>}
          <Markdown markdown={leader.markdown}/>
        </div>
      ))}
    </div>
  )


Leaders.defaultProps = {
  title: ""
}

Leaders.propTypes = {
  leaders: PropTypes.array.isRequired,
  title: PropTypes.string
}

export default React.memo(Leaders);

Leaders.displayName = Leaders;