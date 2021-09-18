import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import Layout from "../components/Layout/Layout"
import DynamicContent from "../components/DynamicContent/DynamicContent"
import Seo from "../components/Seo/Seo"

import { pageSelector } from "./selector"

const Pages = ({ data }) => {
  const { title, content: contentArray, allFile } = pageSelector(data)
  return data ? (
    <Layout>
      <Seo title={title} />
      {contentArray?.map(
        (content, i) =>
          content && (
            <DynamicContent key={`${content.id}-${i}`} content={content} allFile={allFile} />
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
  query MyPage($path: String) {
    strapiPage(path: { eq: $path }) {
      title
      path
      content
    }
    allFile {
      nodes {
        name
        id
        publicURL
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  }
`

