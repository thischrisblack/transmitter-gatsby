import React from 'react'
import GetPosts from '../components/getPosts'
import Layout from '../components/layout'
import Loading from '../components/loadingScreen'
import Post from '../components/post'
import SEO from '../components/seo'
import styled from 'styled-components'

const MessagesContainer = styled.div`
    padding: 1rem 0 3rem 0;
`

const MessageList = styled.ul`
    list-style-type: none;
`

const Messages = ({ messages, loading }) => {
    return (
        <Layout>
            {loading && <Loading message="Loading..." />}
            <SEO
                title="Messages for you."
                description="Transmissions from an undisclosed location."
                pathname="/messages/"
            />
            <MessagesContainer>
            <h2>Messages</h2>
                {!loading && !messages.length && <p>Nothing.</p>}
                {!loading && messages.length > 0 && (
                    <MessageList>
                        {messages.map(message => (
                            <Post
                                message={message}
                                key={message.id}
                                type="message"
                            />
                        ))}
                    </MessageList>
                )}
            </MessagesContainer>
        </Layout>
    )
}

export default GetPosts(Messages)
