import React from "react"

import Seo from "../components/seo/Seo"

import useNavigateTo from "../hooks/useNavigateTo"
import Layout from "../components/layout/Layout"

const IndexPage = () =>
{
  useNavigateTo("/home")
  return (
    <Layout>
      <Seo title="home" />
    </Layout>
  )
}

export default IndexPage
