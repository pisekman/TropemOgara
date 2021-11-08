import * as React from 'react'
import  {Link} from 'gatsby'
import {
     container,
     heading,
     nav,
     navLinks,
     navLinkItem,
     navLinkText
   } from './layout.module.css'
   import { StaticImage } from 'gatsby-plugin-image'
   import photo from '../images/menuTopPhoto.jpeg'



const Layout = ({pageTitle, children}) => {
     return (
          <div>
          
        <StaticImage alt="Plaza nad Wisla" src="../images/menuTopPhoto.jpeg" style={{maxWidth: '100%', width: '1900px', height: '500px'}}/>

          <div className={container}>

               <title>{pageTitle}</title>
      

               <nav className={nav}>
                    <ul className={navLinks}>
                         <li className={navLinkItem}><Link className={navLinkText} to='/'>Home</Link></li>
                         <li className={navLinkItem}><Link className={navLinkText} to='/about'>O nas</Link></li>
                         <li className={navLinkItem}><Link className={navLinkText} to='/ogarpolski'>Ogar Polski</Link></li>
                         <li className={navLinkItem}><Link className={navLinkText} to='/kontakt'>Kontakt</Link></li>


                    </ul>
               
               </nav>
               <main >
                    <h1 style={{display: 'flex', justifyContent: 'center'}} className={heading}>{pageTitle}</h1>
                         {children}
               </main>
               </div>
          </div>
     )
}

export default Layout
