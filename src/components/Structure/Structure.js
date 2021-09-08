import React from "react"
import PropTypes from "prop-types"
import Markdown from "../Markdown/Markdown"


const Structure = React.memo(({ structure, title }) =>
{
    console.log(structure.cover.publicURL, title)
    return (
        <>
            <h2 style={{ marginTop: "2rem" }}>{title}</h2>
            <img src={structure.cover.publicURL} alt="structureImg" style={{ width: "100%" }} />
        </>
    )
})

Structure.defaultProps = {
    title: "",
}

Structure.propTypes = {
    structure: PropTypes.object.isRequired,
    title: PropTypes.string
}

export default Structure
