import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="home"
          keywords={[`blog`, `developer`, `personal site`]}
        />
         {/* <Bio />  */}
        {posts.slice(0,2).map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug} style={{
              padding: `${rhythm(2 /4)} ${rhythm(2 / 4)}`,
              margin: `${rhythm(2 /4)}`,
            }}>
              <h3
                style={{
                  //marginBottom: rhythm(1 / 4),
                  marginTop: '0',
                  marginBottom: '0',
                  borderBottom: '2px solid #9278a9',
                  padding: '5px',
                }}
              >
                <Link style={{ 
                  boxShadow: `none`, 
                  //borderBottom: '2px solid #9278a9',
                  marginBottom: '0',
                  padding: '5px'
                   }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <div style={{
          background: '#9278a9',
          padding: '5px'
        }}>
              <small>{node.frontmatter.date}</small>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
              </div>
            </div>
          )
        })} 
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
