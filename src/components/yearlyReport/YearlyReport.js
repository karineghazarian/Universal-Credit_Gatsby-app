import React from "react"
import PropTypes from "prop-types"
import ReportItem from "../Report/ReportItem";



const YearlyReport = ({ reports, title }) =>
{
  const structuredReports = reports.map(report => ({
    year: report.year?.replace("year_", "") || '--',
    name: report.text,
    file: report.file
  }));

  return (
    <div>
      <div>{title}</div>
      {
        structuredReports.map((report, i) => (
          <ReportItem
            key={report.year + i}
            title="ՏԱՐԵԿԱՆ ՖԻՆԱՆՍԱԿԱՆ ՀԱՇՎԵՏՎՈՒԹՅՈՒՆՆԵՐ"
            yearlyReports={structuredReports}
            type="yearly"
          />
        ))
      }
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

export default React.memo(YearlyReport);

YearlyReport.displayName = 'YearlyReport'