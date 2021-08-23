import React from 'react';
import FileSaver from "file-saver"
import PropTypes from 'prop-types'

function ReportMonth({ data })
{
    const { docs, name } = data;

    function onClickHandler(e, doc)
    {
        e.preventDefault();
        FileSaver.saveAs(`${process.env.GATSBY_URL}${doc.file.publicURL}`, `${doc.file.name}${doc.file.ext}`)
    }

    return (
        <div style={{ padding: "20px 0" }}>
            <span style={{ fontSize: 21 }}>{name}</span>
            <hr />
            <div>
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