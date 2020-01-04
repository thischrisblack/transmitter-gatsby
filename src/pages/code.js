import React from "react"
import GetPosts from "../components/getPosts"
import Layout from "../components/layout"
import Loading from "../components/loadingScreen"
import Post from "../components/post"
import SEO from "../components/seo"
import styled from "styled-components"

const MessagesContainer = styled.div`
  padding: 1rem 0 3rem 0;
`

const MessageList = styled.ul`
  list-style-type: none;
`

const Code = ({ messages, loading }) => {
  if (!loading && !messages.length) return <p>Nothing.</p>
  return (
    <Layout>
      {loading && <Loading message="Loading..." />}
      <SEO
        title="Code"
        description="Chris Black is a JavaScript developer whose favorite framework is whatever framework he's working in right now, or, even better, none."
      />
      <MessagesContainer>
        <h2>
          Both music and code are structures made of nothing that could contain
          everything.
        </h2>
        <MessageList>
          {messages.map(message => (
            <Post message={message} key={message.id} type="message" />
          ))}
        </MessageList>
      </MessagesContainer>
    </Layout>
  )
}

export default GetPosts(Code)
