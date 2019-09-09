import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

Wordpress2016.overrideThemeStyles = () => {
  return {
    "*": {
      maxWidth: '100%',
    },
    "body": {
      fontFamily: `'Roboto', serif`,
      letterSpacing: '1px',
      width: '100%',
    },
    ".content": {
      maxWidth: '100vw',
    },
    "main": {
      width: '100%',
    },
    "h1, h2, h3, h4, h5, h6": {
      marginTop: '0',
    },
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    "a": {
      boxShadow: 'none',
      color: '#000000'
    },
    "header a": {
      webkitTransition: '1s ease-in-out',
      transition: '1s ease-in-out',
    },
    "header a:hover": {
      webkitTransition: '1s ease-in',
      transition: '1s ease-in',
      background: '#d3cce3',
    },
    ".th": {
      backgroundColor: 'white', 
      borderRadius: '100px', 
      color: '#9278a9',
      fontSize: '35px',
      margin: '4px'
    },
    "input, textarea": {
      width: '100%',
      backgroundColor: 'white',
      boxShadow: '0',
      border: '0',
      borderBottom: '1px solid #9278a9',
      margin: '2px'
    },
    "button": {
      backgroundColor: 'white',
      border: '1px solid #9278a9',
      boxShadow: '0'
    },
    "contact-form": {
      display: 'flex',
      flexDirection: 'column'
    },
    ".fas, .fab": {
      padding: '20px',
      boxSizing: 'content-box',
      fontSize: '25px',
      webkitTransition: '1s ease-in-out',
      transition: '0.5s ease-in-out'
    },
    ".fas:hover, .fab:hover": {
      color: '#9278a9',
      webkitTransition: '1s ease-in-out',
      transition: '0.5s ease-in-out'
    },
    "h3 .fas, h3 .fab, li .fas": {
      padding: '0'
    },
    "li": {
      margin: '10px'
    },
    "@media only screen and (max-width: 600px)": {
      ".content": {
        flexWrap: 'wrap-reverse'
      },
      "main": {
        width: '100%'
      }
    }
  }
}

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
