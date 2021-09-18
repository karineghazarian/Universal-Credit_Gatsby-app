import React, { useCallback } from "react"
import PropTypes from "prop-types"
import rehypeRaw from "rehype-raw"
import ReactMarkdown from "react-markdown"

import "./Markdown.css"

const Markdown = ({ markdown, className, title }) => {
  const transformImageUri = useCallback(
    uri =>
      uri.startsWith("http") ? uri : `${process.env.GATSBY_API_URL}${uri}`,
    []
  )

  return (
    <>
      {title && <h2>{title}</h2>}
      <ReactMarkdown
        transformImageUri={transformImageUri}
        skipHtml={false}
        rehypePlugins={[rehypeRaw]}
        className={`${className} reactMarkDown`}
        style={{ padding: "2rem, 5rem", textAlign: "center" }}
      >
        {markdown}
      </ReactMarkdown>
    </>
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
