import React, { useCallback } from "react"
import PropTypes from "prop-types"

import rehypeRaw from "rehype-raw"

import ReactMarkdown from "react-markdown"
import "./Markdown.css";

const Markdown = ({ markdown, className, title }) =>
{
  const transformImageUri = useCallback(
    uri =>
      uri.startsWith("http") ? uri : `${process.env.GATSBY_API_URL}${uri}`,
    []
  )

  return (
    <ReactMarkdown
      transformImageUri={transformImageUri}
      skipHtml={false}
      rehypePlugins={[rehypeRaw]}
      className={`${className} reactMarkdown`}
      style={{ padding: "2rem, 5rem" }}
    >
      {markdown}
    </ReactMarkdown>
  )
}

Markdown.defaultProps = {
  className: "",
  title: ""
}

Markdown.propTypes = {
  markdown: PropTypes.string.isRequired,
  className: PropTypes.string,
  title: PropTypes.string
}

export default React.memo(Markdown)

Markdown.displayName = 'Markdown';