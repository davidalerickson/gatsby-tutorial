import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const getData = graphql`
{
    site {
      siteMetadata {
        author
        data
        description
        title
        person {
          age
          name
        }
      }
    }
  }
`

const Header = () => {
    const dataObj = useStaticQuery(getData);
    const data = dataObj.site.siteMetadata
    const { person:{ name }, title } = data

    return (
        <div>
            <h1>title: {title}</h1>
            <h1>name: {name}</h1>
        </div>
    )
}

export default Header
