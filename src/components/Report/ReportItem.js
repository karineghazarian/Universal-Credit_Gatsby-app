import React, { useState, useEffect, useRef } from "react"
import PropTypes from "prop-types"
import FileSaver from "file-saver"

import Animated from "../Animated"
import ReportMonth from "./ReportMonth"

import * as styles from "./ReportItem.module.css"

function ReportItem({ months, yearlyReports, type, title }) {
  const [open, setOpen] = useState(false)
  const [show, setShow] = useState(false)
  const [itemLength, setItemLength] = useState(null)
  const timeoutIdRef = useRef(0)

  function showHandler() {
    setOpen(!open)
  }

  function onClickHandler(e, doc) {
    e.preventDefault()
    FileSaver.saveAs(doc.file.url, doc.file.name);
  }

  useEffect(() => {
    function onResize() {
      setOpen(false)
      if (window.innerWidth >= 930 && itemLength !== 260) {
        setItemLength(months.length ? 260 : 60)
      } else if (window.innerWidth < 930 && itemLength !== 240) {
        setItemLength(months.length ? 240 : 60)
      }
    }

    window.addEventListener("resize", onResize)

    if (window.innerWidth >= 930) {
      setItemLength(months.length ? 260 : 60)
    } else if (window.innerWidth < 930) {
      setItemLength(months.length ? 240 : 60)
    }
    return () => {
      window.removeEventListener("resize", onResize)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (timeoutIdRef.current) {
      window.clearTimeout(timeoutIdRef.current)
    }
    if (open) {
      setShow(true)
    } else {
      setOpen(false)
      timeoutIdRef.current = window.setTimeout(() => {
        setShow(false)
      }, 700)
    }
    return () => {
      window.clearTimeout(timeoutIdRef.current)
    }
  }, [open])

  return (
    <div className={styles.reportItemContainer}>
      <div>
        <div className={styles.reportYear} onClick={showHandler}>
          <strong>{title}</strong>
          <i className={open ? "icon-circle-up" : "icon-circle-down"} />
        </div>
        <div style={{ overflow: "hidden" }}>
          {show && (
            <Animated
              from={{ height: 0 }}
              to={{
                height:
                  itemLength *
                  (type === "monthly" ? months.length : yearlyReports.length),
              }}
              inverse={!open}
            >
              {style => (
                <div style={style}>
                  {type === "monthly"
                    ? months.map((report, i) => (
                        <ReportMonth key={`${report.name}-${i}`} data={report} />
                      ))
                    : yearlyReports.map((report, i) => (
                        <div key={`${report.name}-${i}`} className={styles.report}>
                          <strong className={styles.yearlyReportDate}>
                            {report.year}
                          </strong>
                          <span
                            onClick={e => onClickHandler(e, report)}
                            title={report.name}
                            className={styles.yearlyReportItem}
                          >
                            {report.name}
                          </span>
                        </div>
                      ))}
                </div>
              )}
            </Animated>
          )}
        </div>
      </div>
      <hr />
    </div>
  )
}

ReportItem.defaultProps = {
  yearlyReports: [],
  months: [],
}

ReportItem.propTypes = {
  title: PropTypes.string.isRequired,
  months: PropTypes.array,
  yearlyReports: PropTypes.array,
  type: PropTypes.string.isRequired,
}

ReportItem.displayName = "ReportItem"

export default ReportItem
