import React, { useCallback } from "react"
import PropTypes from "prop-types"

import rehypeRaw from "rehype-raw"

import ReactMarkdown from "react-markdown"

const Markdown = React.memo(({ markdown, className }) =>
{
  const transformImageUri = useCallback(
    uri =>
      uri.startsWith("http") ? uri : `${process.env.GATSBY_API_URL}${uri}`,
    []
  )
  console.log("Markdown: ", markdown)
  return (
    <ReactMarkdown
      transformImageUri={transformImageUri}
      skipHtml={false}
      rehypePlugins={[rehypeRaw]}
      className={className}
    >
      {markdown}
    </ReactMarkdown>
  )
})

Markdown.defaultPropTypes = {
  className: ""
}

Markdown.propTypes = {
  markdown: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
}

export default Markdown
