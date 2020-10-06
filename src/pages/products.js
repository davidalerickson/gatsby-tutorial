import React from "react"
import Layout from "../components/layout"
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import Image from 'gatsby-image'
import styles from '../components/products.module.css'


const products = ({data}) => {
  const {allContentfulProduct:{nodes:products}} = data
  return (
    <div>
      <Layout>
          <h1>Products</h1>
        <section className={styles.page}>
          {products.map((product, index) => {
            return <article key={product.id}>
            <Image fluid={product.image.fluid} alt={product.title}></Image>
            <h3>{product.title} <span>${product.price}</span></h3>
            <Link to={`/products/${product.slug}`}>More Details</Link>
            </article>
          })}
      </section>
      </Layout>
    </div>
  )
}

export const query = graphql`
{
  allContentfulProduct {
    nodes {
      id
      price
      title
      slug
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
}
`

export default products
