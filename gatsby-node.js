const path = require("path")

const makeRequest = (graphql, request) =>
  new Promise((resolve, reject) => {
    // Query for nodes to use in creating pages.
    resolve(
      graphql(request).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        return result
      })
    )
  })

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const getPages = makeRequest(
    graphql,
    `
    {
      allStrapiPage {
        edges {
          node {
            id
            path
          }
        }
      }
    }
    `
  ).then(result => {
    const pages = result.data.allStrapiPage.edges
    const Component = path.resolve("src/page-template/Page.js")
    //  Create pages for each page.
    pages.forEach(({ node }) => {
      createPage({
        path: `/${node.path}`,
        key: node.id,
        component: Component,
        context: {
          id: node.id,
        },
      })
    })
  })

  // Query for pages nodes to use in creating pages.
  return getPages
}
