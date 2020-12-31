import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class About extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="about" />
        <div style={{
          textAlign: 'justify',
          maxWidth: rhythm(50),
            padding: `${rhythm(2 /4)} ${rhythm(2 / 4)}`,
            margin: 'auto',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column'
        }}>            <div><Image
        fixed={data.avatar.childImageSharp.fixed}
        alt="Portrait"
        style={{
          minWidth: 100,
          float: 'left',
          margin: '10px'
        }}
      />Layla has been writing code since she was a teenager making fansites for her favorite shows and characters. With a background in art history and historic preservation, she finally made the plunge into professional development by means of the <a href="https://www.gracehopper.com/">Grace Hopper</a> program in Software Engineering. Since graduating the intensive course, she has worked as part of a global development team for <a href="https://kuv.io/">Kuvio Creative</a>. She is passionate about ongoing learning and accessibility.</div>
            <div>When not juggling tabs in Visual Studio, Layla can be found reading on the beach, trying dance workouts or rethinking decisions in an RPG. She is currently working on several personal projects in her free time ranging from coding projects to original fiction writing. Formative favorites include Buffy the Vampire Slayer, Mass Effect and Nancy Drew.</div></div>

        {/* <div style={{
          textAlign: 'justify',
            padding: `${rhythm(2 /4)} ${rhythm(2 / 4)}`,
            margin: `${rhythm(2 /4)}`,
        }}>  </div> */}

  
      {/* <div style={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%'
      }}>
      <div><a href="https://twitter.com/laylawrote"><span aria-label="Twitter" className="th th-twitter"></span></a></div> 
      <div><a href="https://github.com/N7Layla"><span aria-label="Github" className="th th-github"></span></a> </div>
      <div><a href="https://www.goodreads.com/user/show/10094110-layla"><span aria-label="Goodreads" className="th th-goodreads" style={{
                backgroundColor: '#9278a9',
                color: 'white'
              }}></span></a> </div>
              <div><a href="https://letterboxd.com/vod/"><span aria-label="Letterboxd" className="th th-letterboxd" style={{
                backgroundColor: '#9278a9',
                color: 'white'
              }}></span></a></div>
              <div><a href="https://ko-fi.com/laylawrote"><span aria-label="Ko-Fi" className="th th-ko-fi"></span></a></div></div> */}
      </Layout>
    )
  }
}

export default About;

export const aboutQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    avatar: file(absolutePath: { regex: "/beach.jpg/" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`


