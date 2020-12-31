import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class Contact extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="contact" />
        <div style={{
            maxWidth: rhythm(50),
            padding: `${rhythm(2 /4)} ${rhythm(2 / 4)}`,
            margin: 'auto',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column'
        }}>
        <p>Wanna get in touch?</p>

        <form id="contact-form" action="https://formspree.io/laylawrote@gmail.com" method="POST">
        <input aria-label="Name" type="text" name="name" placeholder="Your Name"></input>
        <input aria-label="Email" type="text" name="replyto" placeholder="Your Email"></input>
        <textarea aria-label="Message" type="text" name="message" placeholder="Message"></textarea>
        <button type="submit">Submit</button>
        </form>
        </div>
      </Layout>
    )
  }
}

export default Contact;

export const projQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
