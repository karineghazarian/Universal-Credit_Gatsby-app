import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import DynamicContent from "../components/dynamicContent"
import Seo from "../components/seo"

import { pageSelector } from "./selector"

const Pages = ({ data }) => {
  const { title, content: contentArray } = pageSelector(data)
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
      content: PropTypes.array.isRequired,
    }),
  }),
}

export default Pages

export const pageQuery = graphql`
  query MyPage($id: String) {
    strapiPage(id: { eq: $id }) {
      title
      path
      content {
        id
        hasCalculator
        hasMap
        Markdown
        Slide {
          caption
          id
          cover {
            publicURL
            name
          }
        }
        Card {
          text
          id
          page {
            path
            title
          }
          cover {
            publicURL
            name
          }
        }
        Warning
      }
    }
  }
`
