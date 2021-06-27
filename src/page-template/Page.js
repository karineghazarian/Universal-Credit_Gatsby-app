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

export const FragmentApplicationItem = graphql`
  fragment StrapiPageContentApplicationItemFragment on StrapiPageContentApplicationItem {
    item
    placeholder
    type
    id
  }
`

export const FragmentCard = graphql`
  fragment StrapiPageContentCardFragment on StrapiPageContentCard {
    id
    cover {
      publicURL
      name
    }
    text
    page {
      path
      title
    }
  }
`

export const FragmentCalculator = graphql`
  fragment StrapiPageContentCalculatorFragment on StrapiPageContentCalculator {
    id
    rateSrc
    title
  }
`

export const FragmentFile = graphql`
  fragment StrapiPageContentFileFragment on StrapiPageContentFile {
    file {
      publicURL
      name
    }
    id
  }
`

export const FragmentMap = graphql`
  fragment StrapiPageContentMapFragment on StrapiPageContentMap {
    src
  }
`

export const FragmentMarkdown = graphql`
  fragment StrapiPageContentMarkdownFragment on StrapiPageContentMarkdown {
    markdown
  }
`

export const FragmentSlide = graphql`
  fragment StrapiPageContentSlideFragment on StrapiPageContentSlide {
    id
    caption
    cover {
      publicURL
      name
    }
  }
`

export const FragmentWarning = graphql`
  fragment StrapiPageContentWarningFragment on StrapiPageContentWarning {
    warning
  }
`

export const FragmentModalWarning = graphql`
  fragment StrapiPageContentModalWarningFragment on StrapiPageContentModalWarning {
    warning
  }
`

export const pageQuery = graphql`
  query MyPage($id: String) {
    strapiPage(id: { eq: $id }) {
      title
      path
      content {
        id
        ApplicationItem {
          ...StrapiPageContentApplicationItemFragment
        }
        Card {
          ...StrapiPageContentCardFragment
        }
        Calculator {
          ...StrapiPageContentCalculatorFragment
        }
        File {
          ...StrapiPageContentFileFragment
        }
        Map {
          ...StrapiPageContentMapFragment
        }
        Markdown {
          ...StrapiPageContentMarkdownFragment
        }
        Slide {
          ...StrapiPageContentSlideFragment
        }
        Warning {
          ...StrapiPageContentWarningFragment
        }
        ModalWarning {
          ...StrapiPageContentModalWarningFragment
        }
      }
    }
  }
`
