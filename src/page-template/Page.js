import React from "react";
import {Link, graphql} from "gatsby";
import Layout from "../components/layout";
import DynamicContent from "../components/DynamicContent";

const Pages = ({data}) =>
{
    console.log(data);

    return (
        <Layout>
            {data?.allStrapiPages?.nodes[0]?.content?.map((item, index) => (
                <DynamicContent key={`${item.id}-${index}`} content={item}/>
            ))}
            {/*<ul>*/}
            {/*  {data?.allStrapiPages.edges.map(document => (*/}
            {/*    <li key={document.node.id}>*/}
            {/*        <h2>*/}
            {/*            <Link to={`/${document.node.id}`}>{document.node.title}</Link>*/}
            {/*        </h2>*/}
            {/*        <p>{document.node.content}</p>*/}
            {/*    </li>*/}
            {/*  ))}*/}
            {/*</ul>*/}
            <Link to="/page-2/">Go to page 2</Link>
        </Layout>
    );
};

export default Pages;

export const pageQuery = graphql`
  query MyQuery($id: String) {
    allStrapiPages(filter: {id: {eq: $id}}) {
      nodes {
        title
        path
        content {
          id
          markdown
          Slide {
            caption
            cover {
              publicURL
              id
            }
          }
        }
      }
    }
  }
`;