import * as React from 'react'
import  {Link} from 'gatsby'
import { Box, Flex } from 'rebass/styled-components';
import { ThemeProvider } from 'styled-components';
import {
     container,
     heading,
     navLinks,
     navLinkItem,
     navLinkText,
     navbar,
     navImage,
     footer,
   } from './layout.module.css'
   import { StaticImage } from 'gatsby-plugin-image'
   import logo from '../images/logo.png'

   const breakpoints = ['70em', '90em', '110em'];

   export const theme = {
     breakpoints,
     color: '#707070',
     colors: {
       text: '#707070',
       background: '#c',
       primary: '#2B739A',
       secondary: '#03dac6',
       muted: '#f6f6f6',
       gray: '#555',
       silent: '#959595',
       success: '#007f0a',
     },
     buttons: {
       primary: {
         minHeight: 50,
         minWidth: 230,
         borderRadius: 0,
         fontWeight: 300,
         cursor: 'pointer',
       },
     },
     lineHeights: {
       heading: 1.4,
       body: 1,
     },
     variants: {
       wrapper: {
         marginX: [10, 50, 100],
       },
       borderBox: {
         borderRadius: '2px',
         boxShadow: 'rgb(0 0 0 / 12%) 0px 1px 6px, rgb(0 0 0 / 12%) 0px 1px 4px',
       },
       singlePageContent: {
         marginLeft: [50, 150, 250],
         backgroundColor: 'white',
         color: 'text',
         alignSelf: 'flex-end',
         justifyContent: 'flex-end',
         alignItems: 'flex-start',
         marginTop: '-60px',
         flexDirection: 'column',
       },
     },
   };

const Layout = ({pageTitle, children}) => {
     return (
          <ThemeProvider theme={theme}>

          <Box
          backgroundColor={'background'}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
          }}
        >          

        <nav className={navbar}>
  
        <img className={navImage} src={logo} alt=""/>
        <ul className={navLinks}>
             <li className={navLinkItem}><Link className={navLinkText} to='/'>Home</Link></li>
             <li className={navLinkItem}><Link className={navLinkText} to='/about'>O nas</Link></li>
             <li className={navLinkItem}><Link className={navLinkText} to='/ogarpolski'>Ogar Polski</Link></li>
             <li className={navLinkItem}><Link className={navLinkText} to='/kontakt'>Kontakt</Link></li>
             <li className={navLinkItem}>
             <Link to="/blog" className={navLinkText}>
               Blog
             </Link>
           </li>


        </ul>
   
   </nav>        <StaticImage alt="Plaza nad Wisla" src="../images/menuTopPhoto.jpeg" style={{maxWidth: '100%', width: '1900px'}}/>
          <div className={container}>

          <title>{pageTitle}</title>
      <main >
                    <h1 style={{display: 'flex', justifyContent: 'center'}} className={heading}>{pageTitle}</h1>
                         <Box flex={1}>{children}</Box>
               </main>
               </div>
               <footer className={footer}></footer>

          </Box>
          </ThemeProvider>
     )
}

export default Layout
