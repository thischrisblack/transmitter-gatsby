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

const CodeIntro = styled.div`
    margin-bottom: 4rem;
    > h2 {
        margin-bottom: 1rem;
    }
`

const Code = ({ messages, loading }) => {
    return (
        <Layout>
            {loading && <Loading message="Loading..." />}
            <SEO
                title="Software Developer"
                description="Chris Black is a JavaScript developer whose favorite framework is whatever framework he's working in right now, or, even better, none."
                pathname="/code/"
            />
            <MessagesContainer>
                <CodeIntro>
                    <h2>Code</h2>
                    <p>
                        Here is a collection of personal projects or things I've
                        made for others. It's mostly JavaScript and/or React.
                        Professionally I work mostly in TypeScript, Node.js, and
                        Aurelia.
                    </p>
                </CodeIntro>
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

export default GetPosts(Code)
