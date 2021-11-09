import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Box, Flex, Heading, Image, Text } from 'rebass/styled-components';


const BreedPage = ({data}) => {
     return (
          <Layout pageTitle="Rasa Ogar Polski">
          {
               data.allMdx.nodes.map((node) => (
                 <article key={node.id}>
                 <Heading
            fontFamily={'Oswald'}
            color="text"
            fontWeight={'bold'}
            fontSize={'35px'}
            marginBottom={'10px'}
          >
                 {node.frontmatter.title}</Heading>  
                   <p>Posted: {node.frontmatter.date}</p>
                   <MDXRenderer>
                   {node.body}
                 </MDXRenderer>
                 </article>
               ))
             }
          </Layout>
     )
}
export const query = graphql`
  query {
     allMdx(filter: {id: {eq: "c20e959b-bcde-583a-9489-18496b8982a5"}}) {
          nodes {
            id
            body
            frontmatter {
              title
              date
            }
          }
        }
      }
      
   
`

export default BreedPage