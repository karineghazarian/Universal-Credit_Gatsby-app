import React from "react"
import FileSaver from "file-saver"
import PropTypes from "prop-types"

import * as styles from "./ReportMonth.module.css"

function ReportMonth({ data }) {
  const { docs, name } = data

  function renderTheMonth(month) {
    switch (month) {
      case "Jan":
        return "Հունվար"
      case "Feb":
        return "Փետրվար"
      case "March":
        return "Մարտ"
      case "Ap":
        return "Ապրիլ"
      case "May":
        return "Մայիս"
      case "June":
        return "Հունիս"
      case "July":
        return "Հուլիս"
      case "Og":
        return "Օգոստոս"
      case "Sep":
        return "Սեպտեմբեր"
      case "Oct":
        return "Հոկտեմբեր"
      case "Nov":
        return "Նոյեմբեր"
      case "Dec":
        return "Դեկտեմբեր"
      default:
        return "Month"
    }
  }

  function onClickHandler(e, doc) {
    e.preventDefault()
    FileSaver.saveAs(doc.file.url, doc.file.name)
  }

  return (
    <div className={styles.reportMonthContainer}>
      <span className={styles.reportMonthName}>{renderTheMonth(name)}</span>
      <hr />
      <div className={styles.monthlyReports}>
        {docs.map((report, i) => (
          <div key={`${report.name}-${i}`} className={styles.report}>
            <span
              onClick={e => onClickHandler(e, report)}
              title={report.name}
              className={styles.monthlyReportItem}
            >
             {report.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

ReportMonth.propTypes = {
  data: PropTypes.shape({
    docs: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
}

ReportMonth.displayName = "ReportMonth"

export default ReportMonth
