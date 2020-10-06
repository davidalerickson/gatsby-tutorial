import React from "react"
import Header from '../examples/header'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
const examples = ({data}) => {
  const dataObj = data.site.siteMetadata
  const { author } = dataObj

  return (
    <Layout>
      <p>Hello from Examples page</p>
      <h2>Author: {author}</h2>
      <Header/>
    </Layout>
  )
}

export const data = graphql`
query MyQuery {
  site {
    siteMetadata {
      author
      data
      description
      person {
        age
        name
      }
    }
  }
}
`

export default examples
