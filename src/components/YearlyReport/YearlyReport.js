import React from "react"
import PropTypes from "prop-types"
import ReportItem from "../Report/ReportItem"

import "./YearlyReport.css"

const YearlyReport = ({ reports, title }) =>
{
  const structuredReports = reports.map(report => ({
    year: report.year?.replace("year_", "") || "--",
    name: report.text,
    file: report.file,
  }))

  return (
    <div className="yearlyReportContainer">
      {title && <h2 className="yearlyReportTitle pageTitle">{title}</h2>}
      <ReportItem
        title="ՏԱՐԵԿԱՆ ՖԻՆԱՆՍԱԿԱՆ ՀԱՇՎԵՏՎՈՒԹՅՈՒՆՆԵՐ"
        yearlyReports={structuredReports}
        type="yearly"
      />
    </div>
  )
}

YearlyReport.defaultProps = {
  title: "",
  reports: [],
}

YearlyReport.propTypes = {
  title: PropTypes.string,
  reports: PropTypes.array,
}

export default React.memo(YearlyReport)

YearlyReport.displayName = "YearlyReport"
