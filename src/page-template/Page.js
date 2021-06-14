import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import Layout from "../components/layout/Layout"
import DynamicContent from "../components/dynamicContent"
import Seo from "../components/seo/Seo"
import { pageDataSelector } from "./selectors"

const Pages = ({ data }) => {
  debugger
  const { path, title, content: contentArray, hasMap } = pageDataSelector(data)
  return data ? (
    <Layout>
      <Seo title={title} />
      {contentArray?.map(
        (content, i) =>
          content && (
            <DynamicContent key={`${content.id}-${i}`} content={content} />
          )
      )}
    </Layout>
  ) : (
    "Loading..."
  )
}

Pages.defaultProps = {
  data: null,
}

Pages.propTypes = {
  data: PropTypes.shape({
    strapiPage: PropTypes.shape({
      path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      hasMap: PropTypes.bool.isRequired,
      content: PropTypes.array,
    }),
  }),
}

export default Pages

export const pageQuery = graphql`
  query MyQuery($id: String) {
    strapiPage(id: { eq: $id }) {
      title
      path
      hasMap
      content {
        id
        markdown
        slide {
          caption
          cover {
            publicURL
            id
          }
        }
        box {
          path
          id
        }
      }
    }
  }
`
