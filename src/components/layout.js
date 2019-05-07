import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

import Helmet from 'react-helmet'

class Layout extends React.Component {
  render() {
    const { children } = this.props
    //const rootPath = `${__PATH_PREFIX__}/`
    let header;
    let title = "<laylawrote/>"
    

    //if (location.pathname === rootPath) {
      header = (
        <div>
        {/* <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
            fontFamily: 'VT323'
          }}
        > */}

        {/* </h1> */}
                <h4
                style={{
                  fontFamily: `'Staatliches', serif`,
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  //background: '#654ea3',  /* fallback for old browsers */
                  //background: '-webkit-linear-gradient(to left, #eaafc8, #654ea3)',
                  //background: 'linear-gradient(to left, #eaafc8, #654ea3)'

                }}>
                          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
              fontSize: '40px',
              padding: '10px',
              width: '100%'
            }}
            to={`/`}
          >
            {title}
          </Link>
          <div>
          <Link
                style={{
                  textDecoration: 'none', 
                  color: '#000000',
                  textTransform: 'uppercase',
                  padding: '8px'
                }}
                activeStyle={{
                  borderBottom: '2px solid #9278a9'
                }}
                to={'/blog'}>
                Blog
                </Link> 
                <Link
                style={{
                  textDecoration: 'none', 
                  color: '#000000',
                  textTransform: 'uppercase',
                  padding: '8px'
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
                  padding: '8px'
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
                  padding: '8px'
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
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(25),
          //padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          padding: `${rhythm(0.5)} ${rhythm(3 / 4)}`,
        }}
      >
    <Helmet>
      <link href="//dl.dropbox.com/s/vpi3f9s7nhpe7v7/honeybee.css" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css?family=Roboto|Srisakdi|Staatliches" rel="stylesheet"></link>
    </Helmet>
        <header>{header}</header>
        <main>{children}</main>
        <hr style={{
          width: '40%',
          borderTop: '1px solid #9278a9'
        }} />
        <footer style={{
          fontSize: '12px'
        }}>
          ©{new Date().getFullYear()}, {`built by layla with `} <a href="https://www.gatsbyjs.org">gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
