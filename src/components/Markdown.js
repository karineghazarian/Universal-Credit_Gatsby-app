import React from "react";
import ReactMarkdown from "react-markdown";

const Markdown = ({data}) =>
{
    return (
        <ReactMarkdown transformImageUri={transformImageUri}>
           {data}
        </ReactMarkdown>
    );

    function transformImageUri(uri)
    {
        return uri.startsWith("http") ? uri : `${process.env.GATSBY_API_URL}${uri}`;
    }
};

export default Markdown;