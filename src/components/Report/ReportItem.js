import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import FileSaver from "file-saver";

import Animated from "../Animated";
import ReportMonth from './ReportMonth';

import "./ReportItem.css";


function ReportItem({ months, yearlyReports, type, title })
{
    const [open, setOpen] = useState(false);
    const [show, setShow] = useState(false);
    const [itemLength, setItemLength] = useState(null);
    let timeout;

    function onResize(e)
    {
        setOpen(false)
        if (window.innerWidth >= 800 && itemLength !== 250)
        {
            setItemLength(months ? 250 : 50)
        }
        else if (window.innerWidth < 800 && itemLength !== 390)
        {
            setItemLength(months ? 390 : 80)
        }
    }

    function showHandler()
    {
        setOpen(!open)
    }

    function onClickHandler(e, doc)
    {
        e.preventDefault();
        FileSaver.saveAs(`${process.env.GATSBY_URL}${doc.file.publicURL}`, `${doc.file.name}${doc.file.ext}`)
    }

    useEffect(() =>
    {

        window.addEventListener("resize", onResize);

        if (window.innerWidth >= 800)
        {
            setItemLength(months ? 250 : 55)
        }
        else if (window.innerWidth < 800)
        {
            setItemLength(months ? 390 : 80)
        }
        return () =>
        {
            window.removeEventListener("resize", onResize);
        }
    }, [])

    useEffect(() =>
    {
        if (timeout)
        {
            clearTimeout(timeout);
        }
        if (open)
        {
            setShow(true)
        }
        else
        {
            setOpen(false);
            timeout = setTimeout(() =>
            {
                setShow(false)
            }, 700);
        }
        return () =>
        {
            clearTimeout(timeout);
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
                            to={{ height: itemLength * (type === 'monthly' ? months.length : yearlyReports.length) }}
                            inverse={!open}
                        >
                            {syle => (
                                <div style={syle}>
                                    {type === 'monthly' ? (
                                        months.map((month, index) =>
                                            <ReportMonth key={index} data={month} />
                                        ))
                                        : (
                                            yearlyReports.map((item, index) => (
                                                <div key={index}>
                                                    <strong className="yearly-report-date">{item.year}</strong>{" "}
                                                    <span
                                                        onClick={e => onClickHandler(e, item)}
                                                        style={{ cursor: "pointer" }}
                                                        className="yearly-report-item"
                                                    >
                                                        {item.name}
                                                    </span>
                                                </div>
                                            ))
                                        )}
                                </div>
                            )}
                        </Animated>
                    )}
                </div>
            </div >
            <hr />
        </>
    )
};

ReportItem.defaultProps = {
    yearlyReports: [],
    months: [],
}


ReportItem.propTypes = {
    title: PropTypes.string.isRequired,
    months: PropTypes.array,
    yearlyReports: PropTypes.array,
    type: PropTypes.string.isRequired
}


export default ReportItem;