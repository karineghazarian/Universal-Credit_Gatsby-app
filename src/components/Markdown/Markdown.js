import React, { useCallback } from "react"
import PropTypes from "prop-types"
import rehypeRaw from "rehype-raw"
import ReactMarkdown from "react-markdown"

import "./Markdown.css"

const Markdown = ({ markdown, className, title }) =>
{
  const transformImageUri = useCallback(
    uri =>
      uri.startsWith("http") ? uri : `${process.env.GATSBY_API_URL}${uri}`,
    []
  )

  return (
    <div className={`${className} markdownContainer`}>
      {title && <h2 className="pageTitle">{title}</h2>}
      <ReactMarkdown
        transformImageUri={transformImageUri}
        skipHtml={false}
        rehypePlugins={[rehypeRaw]}
        className="reactMarkDown"
        style={{ padding: "2rem, 5rem", textAlign: "center" }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  )
}

Markdown.defaultProps = {
  className: "",
  title: "",
}

Markdown.propTypes = {
  markdown: PropTypes.string.isRequired,
  className: PropTypes.string,
  title: PropTypes.string,
}

Markdown.displayName = "Markdown"

export default React.memo(Markdown)
