import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../layout"
import SEO from "../seo"

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`

const Template = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <Link to="/blog">Go Back</Link>
      <hr />
      <h1>{post.frontmatter.title}</h1>
      <h4>
        Posted by {post.frontmatter.author} on {post.frontmatter.date}
      </h4>
      <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
    </Layout>
  )
}

export default Template
