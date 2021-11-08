import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const AboutUs = () => {
return (
          <Layout pageTitle='O nas' >
          <div style={{margin: ' 50px 200px 0', background: '#03befc'}}>
               <h1>
               Cześć! Poznajmy się bliżej. 🙂

               </h1>

               <span >
               Tropem Ogara to blog o naszym życiu z ogarem polskim – Forysiem z Gończaków. Jednak znajdziecie tu nie tylko opowieści „lajfstajlowe”, lecz także nasze spojrzenie na budowanie relacji z psem w ogóle. Trochę porad, ciekawostek, pro-tipów, przepisów i recenzji produktów, z którymi się zetknęliśmy (i są związane z psami, na próżno szukać tu opinii o telefonie czy telewizorze!).

               Ale że łatwiej czytać coś, co nie zostało napisane anonimowo – chcielibyśmy przedstawić Wam nasz team.
               </span>
               <Link to='/'>
               <button className='btn btn-nav'>Back to home</button>
               </Link>
               </div>
          </Layout>
     )
}

export default AboutUs 