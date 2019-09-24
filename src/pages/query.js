import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

//Imports GraphQL & StaticQuery
import { graphql, StaticQuery } from 'gatsby';

const IndexPage = () => (
<Layout>
    {/* {Creates the graphQL query and renders it onto the page} */}
    <StaticQuery query={graphql`
    {
        allWordpressPage {
        edges {
            node {
            id
            title
            content
            }
        }
        }
    }
    `} render={props => (
    <div>
        {props.allWordpressPage.edges.map(page => (
        <div key={page.node.id}>
            <h1>{page.node.title}</h1>
            <div dangerouslySetInnerHTML={{__html: page.node.content}} />
        </div>
        ))}
    </div>
    )} />
</Layout>
)

export default IndexPage