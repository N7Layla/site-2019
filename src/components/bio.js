/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
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
          <img src={bannerGIF} alt="laylawrote" />
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
