import React, {useEffect} from "react"
import { navigate } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () =>
{
  useEffect(() => {
    if (typeof window !== "undefined") {
      navigate("/home")
    }
  })

  return (
    <Layout>
      <Seo title="Home" />
    </Layout>
  );
}

export default IndexPage
