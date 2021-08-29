import React, { useState, useEffect } from "react";
import PropTypes from "prop-types"
import "./Rates.css";

function Rates(props)
{
    const [protocol, setProtocol] = useState(null);
    const { src } = props;

    useEffect(() =>
    {
        setProtocol(window.location.protocol);
    }, []);
    return protocol && (
        <iframe
            title="rate-title"
            id="rate-widget"
            scrolling="no"
            frameBorder="no"
            src={`${protocol}${src.rateSrc}`}
            width="200px"
            height="150px"
        />
    );
}

Rates.defaultProps = {
    src: "",
}

Rates.propTypes = {
    src: PropTypes.string
}

export default Rates;