import React, { useCallback } from "react"
import PropTypes from "prop-types"

import rehypeRaw from "rehype-raw"

import ReactMarkdown from "react-markdown"

const Markdown = React.memo(({ markdown }) => {
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
    >
      {markdown}
    </ReactMarkdown>
  )
})

Markdown.propTypes = {
  markdown: PropTypes.string.isRequired,
}

export default Markdown
