import React, { useState, useEffect, useRef } from "react"
import PropTypes from "prop-types"
import FileSaver from "file-saver"

import Animated from "../Animated"
import ReportMonth from "./ReportMonth"

import "./ReportItem.css"

function ReportItem({ months, yearlyReports, type, title }) {
  const [open, setOpen] = useState(false)
  const [show, setShow] = useState(false)
  const [itemLength, setItemLength] = useState(null)
  const timeoutIdRef = useRef()

  function showHandler() {
    setOpen(!open)
  }

  function onClickHandler(e, doc) {
    e.preventDefault()
    FileSaver.saveAs(
      `${process.env.GATSBY_API_URL}${doc.file.url}`,
      `${doc.file.name}${doc.file.ext}`
    )
  }

  useEffect(() => {
    function onResize() {
      setOpen(false)
      if (window.innerWidth >= 800 && itemLength !== 250) {
        setItemLength(months ? 250 : 50)
      } else if (window.innerWidth < 800 && itemLength !== 390) {
        setItemLength(months ? 390 : 80)
      }
    }

    window.addEventListener("resize", onResize)

    if (window.innerWidth >= 800) {
      setItemLength(months ? 250 : 55)
    } else if (window.innerWidth < 800) {
      setItemLength(months ? 390 : 80)
    }
    return () => {
      window.removeEventListener("resize", onResize)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current)
    }
    if (open) {
      setShow(true)
    } else {
      setOpen(false)
      timeoutIdRef.current = setTimeout(() => {
        setShow(false)
      }, 700)
    }
    return () => {
      clearTimeout(timeoutIdRef.current)
    }
  }, [open])

  return (
    <>
      <div>
        <div className="report-year" onClick={showHandler}>
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
              {syle => (
                <div style={syle}>
                  {type === "monthly"
                    ? months.map((report, index) => (
                        <ReportMonth key={report.name + index} data={report} />
                      ))
                    : yearlyReports.map((report, index) => (
                        <div key={report.name + index}>
                          <strong className="yearly-report-date">
                            {report.year}
                          </strong>{" "}
                          <span
                            onClick={e => onClickHandler(e, report)}
                            style={{ cursor: "pointer" }}
                            className="yearly-report-item"
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
    </>
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
