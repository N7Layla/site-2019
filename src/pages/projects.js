import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class Projects extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="projects" />
        <div style={{
            padding: `${rhythm(2 /4)} ${rhythm(2 / 4)}`,
            margin: `${rhythm(2 /4)}`,
        }}>
                <div style={{
                  marginBottom: '20px'
                }}>
        <h3 style={{
          borderBottom: '2px solid #9278a9',
          marginBottom: '0',
          padding: '5px'
        }}>flix sorter (link soon)</h3>
                <div style={{
          background: '#d3cce3', 
          background: '-webkit-linear-gradient(to left, #d3cce3, #e9e4f0)',  
          background: 'linear-gradient(to left, #d3cce3, #e9e4f0)', 
          padding: '5px'
        }}>
        an angular webapp for the simple purpose of filtering and sorting a netflix list.
        </div>
        </div>
        <div style={{
          marginBottom: '20px'
        }}>
        <h3 style={{
          borderBottom: '2px solid #9278a9',
          marginBottom: '0',
          padding: '5px'
        }}>ARTmood <a aria-label="code" href="https://github.com/N7Layla/artmood"><i className="fas fa-code"></i></a> <a aria-label="visit" href="https://art-mood.herokuapp.com/"><i className="fas fa-external-link-alt"></i></a></h3> 
        <div style={{
          background: '#d3cce3', 
          background: '-webkit-linear-gradient(to left, #d3cce3, #e9e4f0)',  
          background: 'linear-gradient(to left, #d3cce3, #e9e4f0)', 
          padding: '5px'
        }}>
          a react webapp that provides art by mood, using harvard art museums' api. 
        </div>
        </div>
        <div>
        <h3 style={{
          borderBottom: '2px solid #9278a9',
          marginBottom: '0',
          padding: '5px'
        }}>twitch explorer <a aria-label="code" href="https://github.com/N7Layla/twitch-explorer"><i className="fas fa-code"></i></a></h3>
                <div style={{
          background: '#d3cce3', 
          background: '-webkit-linear-gradient(to left, #d3cce3, #e9e4f0)',  
          background: 'linear-gradient(to left, #d3cce3, #e9e4f0)', 
          padding: '5px'
        }}>
        a vue webapp pulling overwatch stream data from the twitch api. 
        </div>
        </div>
        </div>
      </Layout>
    )
  }
}

export default Projects;

export const projQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
