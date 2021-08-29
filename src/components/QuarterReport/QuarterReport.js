import React from "react"
import PropTypes from "prop-types"
import ReportItem from "../Report/ReportItem"

import * as styles from "./QuarterReport.module.css"

const QuarterReport = ({ reports, title }) =>
{
  function getReportsOfTheYear(r, year)
  {
    return r.filter((report) => report.year === year);
  }

  function getReportsOfTheMonth(r, month)
  {
    return r.filter((report) => report.month === month);
  }

  const years = Array.from(new Set(reports.map(report => report.year)));

  const structuredReports = [];
  years?.forEach(year =>
  {
    const yearFilteredReports = getReportsOfTheYear(reports, year);
    const months = Array.from(new Set(yearFilteredReports.map(report => report.month)));
    structuredReports.push({
      year: year.replace("year_", ""),
      months: months.map((month) =>
      {
        const monthFilteredReports = getReportsOfTheMonth(yearFilteredReports, month);
        return {
          name: month,
          docs: monthFilteredReports.map(filteredReport => ({
            name: filteredReport.text,
            file: filteredReport.file,
          }))
        }
      })
    })
  })

  return (
    <div className={styles.quarterReportContainer}>
      <h2 style={{ maxWidth: "unset" }}>{title}</h2>
      {
        structuredReports.map((report) => ({
          ...report,
          months: [...report.months.reverse().map((month) => ({
            ...month,
            docs: [...month.docs.reverse()]
          }))]
        })).map((report, i) => (
          <ReportItem
            key={report.year + i}
            title={`${report.year} ՀԱՇՎԵՏՎՈՒԹՅՈՒՆՆԵՐ /միջանկյալ ֆինանսական/`}
            year={report.year}
            months={report.months}
            type="monthly"
          />
        ))
      }
    </div>
  )
}

QuarterReport.defaultProps = {
  title: "",
  reports: [],
}

QuarterReport.propTypes = {
  title: PropTypes.string,
  reports: PropTypes.array,
}

QuarterReport.displayName = 'QuarterReport'

export default React.memo(QuarterReport);
