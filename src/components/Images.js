import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import img from '../images/images02/image-04.jpg'
import Image from "gatsby-image"
import './images.css'

const getImages = graphql`
{
    fixed: file(relativePath: {eq: "image-03.jpg"}) {
      childImageSharp {
        fixed(width: 200, grayscale: true){
        ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath:{eq:"images02/image-04.jpg"}){
      childImageSharp{
        fluid{
            ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }

`

const Images = () => {
    const data = useStaticQuery(getImages)
    console.log(data)
  return (
      <>
    <section className="images">
      <article className="single-image">
        <h3>Basic Image</h3>
        <img src={img} width="100%"/>
      </article>
      <article className="single-image">
        <h3>Fixed image/blur</h3>
        <Image fixed={data.fixed.childImageSharp.fixed}/>
      </article>
      <article className="single-image">
        <h3>Fluid Image/svg</h3>
        <Image fluid={data.fluid.childImageSharp.fluid}/>
        <Image fluid={data.fluid.childImageSharp.fluid} className="small"/>
      </article>
    </section>
    </>
  )
}

export default Images
