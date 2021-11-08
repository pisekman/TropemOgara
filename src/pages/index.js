import * as React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import photo from '../images/menuTopPhoto.jpeg'



const indexPage = () => {
     return (
          <Layout pageTitle="Home Page">
          <p>Welcome to main page</p>

        </Layout>
     )
}

export default indexPage
