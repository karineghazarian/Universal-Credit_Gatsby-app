import React from "react"
import PropTypes from "prop-types"

const Report = ({ report: { file, text, date } }) => (
  <div>
    {date} {text} / {file.publicURL}
  </div>
)

Report.propTypes = {
  report: PropTypes.shape({
    date: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    file: PropTypes.shape({
      publicURL: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

const YearlyReport = React.memo(({ reports, title }) => (
  <div>
    <h1>{title}</h1>
    {reports.map(report => (
      <Report key={report.id} report={report} />
    ))}
  </div>
))

YearlyReport.defaultProps = {
  title: "",
  reports: [],
}

YearlyReport.propTypes = {
  title: PropTypes.string,
  reports: PropTypes.array,
}

export default YearlyReport
