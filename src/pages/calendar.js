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

const Calendar = ({ messages, loading }) => {
  if (!loading && !messages.length) return <p>Nothing.</p>
  return (
    <Layout>
      {loading && <Loading message="Loading..." />}
      <SEO
        title="Calendar"
        description="A calendar of Chris Black's events and activities."
        pathname="/calendar/"
      />
      <MessagesContainer>
        <h2>What I'm doing.</h2>
        <MessageList>
          {messages.map(message => (
            <Post message={message} key={message.id} type="calendar" />
          ))}
        </MessageList>
      </MessagesContainer>
    </Layout>
  )
}

export default GetPosts(Calendar)
