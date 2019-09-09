/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"

import bannerGIF from '../../static/desk_commission.gif';


import { rhythm } from "../utils/typography"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div style={{
            //minWidth: '430px'
            width: '100%'
          }}>
           
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              paddingBottom: '10px',
              flexDirection: 'column',
              width: '100%',
              //marginBottom: rhythm(2.5),
            }}
          >
          <Link to={'/'}><img src={bannerGIF} alt="<laylawrote/>" /></Link>
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: '10px',
                minWidth: 50,
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
            <div style={{
             margin: '0',
             lineHeight: '1em',
             fontSize: '1.2em',
             fontStyle: 'italic',
             fontWeight: 'bold',
             textAlign: 'center'
            }}>
              Developer & pop culture enthusiast. 
              {/* <a href="https://twitter.com/laylawrote"><span aria-label="Twitter" className="th th-twitter-o" style={{
                fontSize: '13px'
              }}></span></a> */}
            </div>
            <div style={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%'
      }}>
      <a aria-label="twitter" href="https://twitter.com/laylawrote"><i className="fab fa-twitter fa-fw"></i></a>
      <a aria-label="github" href="https://github.com/N7Layla"><i className="fab fa-github fa-fw"></i></a> 
      <a aria-label="goodreads" href="https://www.goodreads.com/user/show/10094110-layla"><i className="fab fa-goodreads fa-fw"></i></a> 
              <a aria-label="letterbod" href="https://letterboxd.com/vod/"><i className="fas fa-film fa-fw"></i></a>
              <a aria-label="ko-fi" href="https://ko-fi.com/laylawrote"><i className="fas fa-coffee fa-fw"></i></a></div>
          </div>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/laylas.png/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    banner: file(absolutePath: { regex: "/desk_commission.gif/" }) {
      childImageSharp {
        fixed(width: 500) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
