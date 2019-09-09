import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class Blog extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="blog"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        {posts.map(({ node }) => {
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
          background: '#d3cce3', 
          background: '-webkit-linear-gradient(to left, #d3cce3, #e9e4f0)',  
          background: 'linear-gradient(to left, #d3cce3, #e9e4f0)',  
          padding: '5px'
        }}>
              <div style={{
                width: '100%',
                textAlign: 'right',
                fontSize: '10px',
                textTransform: 'uppercase',
              }}>{node.frontmatter.date}</div>
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

export default Blog

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
