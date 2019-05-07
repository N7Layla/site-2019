import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Projects extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="projects" />
        <div style={{marginBottom: '20px'}}>
        <div>
        <h3 style={{borderBottom: '2px solid #9278a9'}}>ARTmood <a href="https://github.com/N7Layla/artmood"><span aria-label="Code" className="th th-code" style={{fontSize: '20px'}}></span></a> <a href="https://art-mood.herokuapp.com/"><span aria-label="View" className="th th-open" style={{fontSize: '18px'}}></span></a></h3> 
        a react webapp that provides art by mood, using harvard art museums' api. 
        </div>
        <div>
        <h3 style={{borderBottom: '2px solid #9278a9'}}>twitch explorer <a href="https://github.com/N7Layla/twitch-explorer"><span aria-label="Code" style={{fontSize: '20px'}} className="th th-code"></span></a></h3>
        a vue webapp pulling overwatch stream data from the twitch api. 
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
