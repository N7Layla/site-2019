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
            <div style={{
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
              Welcome! Recently I am...
              </h3>
              <div style={{
          background: '#d3cce3', 
          background: '-webkit-linear-gradient(to left, #d3cce3, #e9e4f0)',  
          background: 'linear-gradient(to left, #d3cce3, #e9e4f0)', 
          padding: '5px',
          width: '100%'
        }}>
        <ul className="fa-ul">
          <li><span className="fa-li"><i className="fas fa-paragraph fa-xs"></i></span>Writing: <Link to={posts[0].node.fields.slug}>{posts[0].node.frontmatter.title || posts[0].node.frontmatter.slug}</Link></li>
          <li><span className="fa-li"><i className="fas fa-book-open fa-xs"></i></span>Reading: <i>Strapless</i> by Deborah Davis</li>
          <li><span className="fa-li"><i className="fas fa-gamepad fa-xs"></i></span>Playing: Stardew Valley</li>
          <li><span className="fa-li"><i className="fas fa-music fa-xs"></i></span>Listening: chloe mk</li>
          <li><span className="fa-li"><i className="fas fa-tv fa-xs"></i></span>Watching: Critical Role, always.</li>
        </ul>
            
                              
              </div>
            </div> 
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
