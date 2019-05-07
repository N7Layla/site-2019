import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

class About extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="about" />
        <p style={{textAlign: 'justify'}}>            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt="Portrait"
              style={{
                minWidth: 100,
                float: 'left',
                margin: '10px'
              }}
            />Layla has been writing code since she was a teenager making fansites for her favorite shows and characters. Degree in Art History plus experience in historic preservation and customer service under her belt, she finally made the plunge into professional development by means of the <a href="https://www.gracehopper.com/">Grace Hopper</a> program in Software Engineering. Since graduating the intensive program in 2018, she has worked as part of a global development team for <a href="https://kuv.io/">Kuvio Creative</a>. She is passionate about ongoing learning and accessibility.</p>

      <p style={{
        textAlign: 'justify'
      }}>When not juggling tabs in Visual Studio, Layla can be found reading on the beach, trying dance workouts or rethinking decisions in an RPG. She is currently working on several personal projects in her free time ranging from coding projects to original fiction writing. Formative favorites include Buffy the Vampire Slayer, Mass Effect and Nancy Drew.</p>

  
      <div style={{
        display: 'flex',
        justifyContent: 'space-around'
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
              <div><a href="https://ko-fi.com/laylawrote"><span aria-label="Ko-Fi" className="th th-ko-fi"></span></a></div></div>
<div style={{
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  marginTop: '20px',
  marginBottom: '20px'
}}>
      <div  
            //id="___gatsby"
            dangerouslySetInnerHTML={{ __html: `
            <div id="gr_challenge_8863" style="border: 0px solid #9278a9; border-radius:10px; padding: 0px 7px 0px 7px; min-height: 100px">
              <div id="gr_challenge_progress_body_8863" style="font-size: 12px; font-family: georgia,serif;line-height: 18px">
                <h5 style="margin: 4px 0 10px; font-weight: normal; text-align: center">
                  <a style="text-decoration: none; font-family:georgia,serif;font-style:italic; font-size: 1.1em" rel="nofollow" href="https://www.goodreads.com/challenges/8863-2019-reading-challenge">2019 Reading Challenge</a>
                </h5>
                    <div class="challengePic">
                      <a rel="nofollow" href="https://www.goodreads.com/challenges/8863-2019-reading-challenge"><img alt="2019 Reading Challenge" style="float:left; margin-right: 10px; border: 0 none" src="https://images.gr-assets.com/challenges/1542320733p2/8863.jpg" /></a>
                    </div>
                  <div>
                    <a rel="nofollow" href="https://www.goodreads.com/user/show/10094110-layla">Layla</a> has
                         read 8 books toward
                         her goal of
                         20 books.
                  </div>
                  <div style="width: 100px; margin: 4px 5px 5px 0; float: left; border: 1px solid #382110; height: 8px; overflow: hidden; background-color: #FFF">
                    <div style="width: 40%; background-color: #D7D2C4; float: left"><span style="visibility:hidden">hide</span></div>
                  </div>
                  <div style="font-family: arial, verdana, helvetica, sans-serif;font-size:90%">
                    <a rel="nofollow" href="https://www.goodreads.com/user_challenges/15270284">8 of 20 (40%)</a>
                  </div>
                    <div style="text-align: right;">
                      <a style="text-decoration: none; font-size: 10px;" rel="nofollow" href="https://www.goodreads.com/user_challenges/15270284">view books</a>
                    </div>
              </div>
              <script src="https://www.goodreads.com/user_challenges/widget/10094110-layla?challenge_id=8863&v=2"></script>
            </div>
            ` }}
          />
        </div>
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
// export const imgQuery = graphql`
// query {

// }
// `


