import React from "react"
import Layout from "../components/layout"
import SEO from "../components/SEO"
import styled from "styled-components"

const Contact = styled.div`
  padding: 1rem 0 3rem 0;

  > p {
    margin: 0 0 2rem 0;
  }
`

export default () => (
  <Layout>
    <SEO title="Contact" description="Contact Chris Black." />
    <Contact>
      <p>
        You can reach me at{" "}
        <a href="mailto:black@chrisblack.net">black@chrisblack.net</a>.
      </p>
      <p>
        I can reach you if you join my{" "}
        <a
          href="https://chrisblackmusic.us4.list-manage.com/subscribe?u=c34da350025e08d5c3a2afd49&id=9b8fff5b69"
          target="_blank"
          rel="noopener noreferrer"
        >
          email list
        </a>
        .
      </p>
    </Contact>
  </Layout>
)
