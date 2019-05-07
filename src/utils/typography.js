import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

Wordpress2016.overrideThemeStyles = () => {
  return {
    "body": {
      fontFamily: `'Roboto', serif`,
      letterSpacing: '1px',
      //backgroundColor: '#eadbf6',
      // background: '#654ea3;',
      // background: '-webkit-linear-gradient(to left, #dae2f8, #d6a4a4)',
      // background: 'linear-gradient(to left, #dae2f8, #d6a4a4)',
      // backgroundSize: 'cover'
    },
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    "a": {
      boxShadow: 'none',
      color: '#000000'
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
