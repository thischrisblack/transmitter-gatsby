import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const Greeting = styled.div`
  padding: 1rem 0 3rem 0;

  > p {
    margin: 2rem 0;
    font-size: 1.6rem;
  }
`

export default ({ data }) => (
  <Layout>
    <SEO />
    <Greeting>
      <img
        className="fuzzy-image"
        src={data.site.siteMetadata.image}
        alt={data.site.siteMetadata.imageAlt}
      />
      <p>
        This is Chris Black transmitting from an undisclosed location. Please
        remain calm.
      </p>
    </Greeting>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        image
        imageAlt
      }
    }
  }
`
