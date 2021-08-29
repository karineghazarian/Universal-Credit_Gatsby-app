import React from 'react';
import FileSaver from "file-saver"
import PropTypes from 'prop-types'

import * as styles from "./ReportMonth.module.css"

function ReportMonth({ data })
{
    const { docs, name } = data;

    function renderTheMonth(month)
    {
        switch (month)
        {
            case "Jan":
                return "Հունվար";
            case "Feb":
                return "Փետրվար";
            case "March։":
                return "Մարտ";
            case "Ap":
                return "Ապրիլ";
            case "May":
                return "Մայիս";
            case "June":
                return "Հունիս";
            case "July":
                return "Հուլիս";
            case "Og":
                return "Օգոստոս";
            case "Sep":
                return "Սեպտեմբեր";
            case "Oct":
                return "Հոկտեմբեր";
            case "Nov":
                return "Նոյեմբեր";
            case "Dec":
                return "Դեկտեմբեր";
            default: return "Month";
        }
    }

    function onClickHandler(e, doc)
    {
        e.preventDefault();
        FileSaver.saveAs(`${process.env.GATSBY_URL}${doc.file.publicURL}`, `${doc.file.name}${doc.file.ext}`)
    }

    return (
        <div style={{ padding: "20px 0" }}>
            <span style={{ fontSize: 23 }}>{renderTheMonth(name)}</span>
            <hr />
            <div className={styles.monthlyReports}>
                {docs.map((doc, index) => (
                    <div onClick={e => onClickHandler(e, doc)} style={{ cursor: "pointer" }}
                        key={index}
                    >
                        {doc.name}
                    </div>
                )
                )}
            </div>
        </div>
    )
};

ReportMonth.propTypes = {
    data: PropTypes.shape({
        docs: PropTypes.object.isRequired,
        name: PropTypes.array.isRequired,
    }).isRequired
}

export default ReportMonth;