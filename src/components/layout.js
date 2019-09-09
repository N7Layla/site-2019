import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import Bio from "../components/bio"


import { rhythm, scale } from "../utils/typography"

import Helmet from 'react-helmet'

class Layout extends React.Component {
  render() {
    const { children } = this.props
    //const rootPath = `${__PATH_PREFIX__}/`
    

    let header;
    let title = "laylawrote"
    
    

    //if (location.pathname === rootPath) {
      header = (
        <div style={{
          width: '100%',
          margin: '0px',
        }}>
                <h4
                style={{
                  fontFamily: `'Staatliches', serif`,
                  width: '100%',

                }}>
          
          <div style={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              borderBottom: '1px solid #b79ed9',
              position: 'fixed',
              top: '0',
              width: '100%',
              background: '#ffffff',
          }}>
          <Link
                style={{
                  textDecoration: 'none', 
                  //color: '#000000',
                  textTransform: 'uppercase',
                  padding: '8px',
                  width: '25%',
                  textAlign: 'center'
                }}
                activeStyle={{
                  borderBottom: '2px solid #9278a9',
                }}
                to={'/blog'}>
                Blog
                </Link> 
                <Link
                style={{
                  textDecoration: 'none', 
                  color: '#000000',
                  textTransform: 'uppercase',
                  padding: '8px',
                  width: '25%',
                  textAlign: 'center'
                }}
                activeStyle={{
                  borderBottom: '2px solid #9278a9'
                }}
                to={'/about'}>
                About
                </Link>    
                <Link
                style={{
                  textDecoration: 'none', 
                  color: '#000000',
                  textTransform: 'uppercase',
                  padding: '8px',
                  width: '25%',
                  textAlign: 'center'
                }}
                activeStyle={{
                  borderBottom: '2px solid #9278a9'
                }}
                to={'/projects'}>
                Projects
                </Link>
                <Link
                style={{
                  textDecoration: 'none', 
                  color: '#000000',
                  textTransform: 'uppercase',
                  padding: '8px',
                  width: '25%',
                  textAlign: 'center'
                }}
                activeStyle={{
                  borderBottom: '2px solid #9278a9'
                }}
                to={'/contact'}>
               Contact
                </Link>
                </div>
              </h4>
              </div>
      );
    return (
      <div>
    <Helmet>
    <script src="https://kit.fontawesome.com/7ada84c29d.js"></script>
      <link href="https://fonts.googleapis.com/css?family=Roboto|Srisakdi|Staatliches" rel="stylesheet"></link>
    </Helmet>
        <header>{header}</header>
        <div style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          marginTop: rhythm(2),
        }}>
        <div className="content" style={{
          display: 'flex',
          maxWidth: rhythm(50),
          padding: '0',
        }}>
        <div style={{
            padding: `${rhythm(1)} ${rhythm(3 / 4)}`,
          }}
        >
         <Bio /> 
        </div>
        <main>{children}</main>
        </div>
        </div>
        {/* <footer style={{
          fontSize: '12px'
        }}>
          ©{new Date().getFullYear()}, {`built by layla with `} <a href="https://www.gatsbyjs.org">gatsby</a>
        </footer> */}
      </div>
    )
  }
}



export default Layout
