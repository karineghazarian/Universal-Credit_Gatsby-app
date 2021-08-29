import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import Layout from "../components/Layout/Layout"
import DynamicContent from "../components/DynamicContent/DynamicContent"
import Seo from "../components/Seo/Seo"

import { pageSelector } from "./selector"

const Pages = ({ data }) =>
{
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

export const FragmentCalculator = graphql`
  fragment StrapiPageContentCalculatorFragment on StrapiPageContentCalculator {
    id
    rateSrc
  }
`

export const FragmentCard = graphql`
  fragment StrapiPageContentCardFragment on StrapiPageContentCard {
    id
    cover {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
        )
      }
    }
    text
    page {
      path
      title
    }
  }
`

export const FragmentFiles = graphql`
fragment StrapiPageContentFilesFragment on StrapiPageContentFiles {
  text
  file {
    name
    publicURL
  }
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
    link
    cover {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
        )
      }
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

export const FragmentYearlyReport = graphql`
  fragment StrapiPageContentYearlyReportFragment on StrapiPageContentYearlyReport {
    id
    year
    text
    file {
      publicURL
      name
    }
  }
`

export const FragmentQuarterReport = graphql`
  fragment StrapiPageContentQuarterReportFragment on StrapiPageContentQuarterReport {
    id
    year
    month
    text
    file {
      publicURL
      name
      ext
    }
  }
`

export const FragmentRules = graphql`
  fragment StrapiPageContentRulesFragment on StrapiPageContentRules {
    file {
      publicURL
      name
    }
  }
`

export const FragmentTerms = graphql`
  fragment StrapiPageContentTermsFragment on StrapiPageContentTerms {
    text
    file {
      publicURL
      name
    }
  }
`

export const FragmentLeaders = graphql`
  fragment StrapiPageContentLeadersFragment on StrapiPageContentLeaders {
    markdown
    name
    title
  }
`

export const FragmentLicense = graphql`
fragment StrapiPageContentLicenseFragment on StrapiPageContentLicense {
  image {
    name
    childImageSharp {
      gatsbyImageData(
        placeholder: BLURRED
      )
    }
  }
}
`

export const pageQuery = graphql`
  query MyPage($id: String) {
    strapiPage(id: { eq: $id }) {
      title
      path
      content {
        id
        title
        Calculator {
          ...StrapiPageContentCalculatorFragment
        }
        ApplicationItem {
          ...StrapiPageContentApplicationItemFragment
        }
        Map {
          ...StrapiPageContentMapFragment
        }
        Card {
          ...StrapiPageContentCardFragment
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
        QuarterReport {
          ...StrapiPageContentQuarterReportFragment
        }
        Files {
          ...StrapiPageContentFilesFragment
        }
        YearlyReport {
          ...StrapiPageContentYearlyReportFragment
        }
        License {
          ...StrapiPageContentLicenseFragment
        }
        Leaders {
          ...StrapiPageContentLeadersFragment
        }
        Terms {
          ...StrapiPageContentTermsFragment
        }
        Rules {
          ...StrapiPageContentRulesFragment
        }
      }
    }
  }
`