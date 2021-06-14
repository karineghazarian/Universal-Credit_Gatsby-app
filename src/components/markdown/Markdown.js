import React, { useCallback } from "react"
import ReactMarkdown from "react-markdown"
import PropTypes from "prop-types"

const Markdown = ({ markdown }) => {
  const transformImageUri = useCallback(
    uri =>
      uri.startsWith("http") ? uri : `${process.env.GATSBY_API_URL}${uri}`,
    []
  )
  return (
    <ReactMarkdown transformImageUri={transformImageUri}>
      {markdown}
    </ReactMarkdown>
  )
}

Markdown.propTypes = {
  markdown: PropTypes.string.isRequired,
}

export default Markdown
