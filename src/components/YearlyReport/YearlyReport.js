import React from "react"
import PropTypes from "prop-types"
import ReportItem from "../Report/ReportItem";

import * as styles from "./YearlyReport.module.css";

const YearlyReport = ({ reports, title }) =>
{
  const structuredReports = reports.map(report => ({
    year: report.year?.replace("year_", "") || '--',
    name: report.text,
    file: report.file
  }));

  return (
    <div className={styles.yearlyReportContainer}>
      <h2 style={{ maxWidth: "unset" }}>{title}</h2>
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

export default React.memo(YearlyReport);

YearlyReport.displayName = 'YearlyReport'