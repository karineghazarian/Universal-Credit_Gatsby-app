import React from "react"

import Seo from "../components/Seo/Seo"

import useNavigateTo from "../hooks/useNavigateTo"
import Layout from "../components/Layout/Layout"

const IndexPage = () => {
  useNavigateTo("/home")
  return (
    <Layout>
      <Seo title="home" />
    </Layout>
  )
}

export default IndexPage
