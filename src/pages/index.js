import React from "react"
import Layout from "../components/layout"
import { ExampleButton } from "../components/Button"

export default function Home() {
  return (
    <>
      <Layout>
        <h1>Hello From Gatsby</h1>
        <ExampleButton>Click Me</ExampleButton>
      </Layout>
    </>
  )
}
