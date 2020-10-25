import React, { useState } from "react"
import { useQueryParam, StringParam } from "use-query-params"
import { useFirebase } from "gatsby-plugin-firebase"
import ReactMarkdown from "react-markdown"
import Layout from "../components/layout"
import Loading from "../components/loadingScreen"
import SoundPlayer from "../components/soundPlayer"
import SEO from "../components/seo"
import styled from "styled-components"

const MessageItem = styled.div`
  padding: 1rem 0 3rem 0;
`

const Timestamp = styled.div`
  font-size: 1.2rem;
  color: rgb(1, 57, 73);
  margin: 0 0 0.5rem 0;
  text-shadow: 0 0 0;
`

const Title = styled.div`
  font-weight: 700;
  font-size: 1.7rem;
  color: rgb(44, 9, 9);
  margin-bottom: 0.5rem;
  text-shadow: none;
`

const Image = styled.div`
  position: relative;
  float: left;
  margin: 0 2rem 1rem 0;
  transition: all 0.2s;
  cursor: pointer;

  &:after {
    content: "";
    background-image: url(../img/static02.gif);
    background-size: 300px 400px;
    opacity: 0.2;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }

  > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: block;
    border: 1px solid black;
  }
`

const StyledParagraph = styled.p`
  margin-bottom: 0.5rem;
`

const MessageLink = styled.a`
  text-shadow: none;
  &:after {
    content: " >>";
  }
`

const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  padding-top: 25px;
  height: 0;

  > iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

const Message = props => {
  const [message, setMessage] = useState({})
  const [loading, setLoading] = useState(true)

  const [messageId] = useQueryParam("id", StringParam)

  useFirebase(firebase => {
    firebase
      .database()
      .ref("transmissions")
      .orderByKey()
      .startAt(messageId)
      .endAt(messageId)
      .once("value")
      .then(snapshot => {
        const result = snapshot.val() || {}

        setMessage(result[messageId])

        setLoading(false)
      })
  }, [])

  const videoLink =
    message.type === "video" &&
    message.link.split("watch?v=")[message.link.split("watch?v=").length - 1]

  return (
    <Layout>
      {loading && <Loading message="Loading..." />}
      <SEO
        title={message.title || "A message from Chris Black."}
        description={message.message || "A message from Chris Black."}
        pathname={"/message/?" + messageId}
      />
      <MessageItem>
        <Timestamp>
          {new Date(Number(message.timestamp)).toUTCString()}
        </Timestamp>

        {message.title && <Title>{message.title}</Title>}

        {message.image && (
          <Image
            style={{
              width: "100%",
              paddingTop: `${message.imageRatio * 99.7}%`,
            }}
          >
            <img src={message.image} alt={message.title} />
          </Image>
        )}

        {message.type === "video" && (
          <VideoWrapper>
            <iframe
              width="560"
              height="315"
              src={"https://www.youtube.com/embed/" + videoLink}
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              title={message.title}
            ></iframe>
          </VideoWrapper>
        )}

        {message.message && (
          <ReactMarkdown
            source={message.message}
            renderers={{ paragraph: StyledParagraph }}
          />
        )}

        <div className="clear" />

        {message.link && message.type !== "video" && (
          <MessageLink
            className="message__link"
            href={message.link}
            rel="noopener noreferrer"
            target="_blank"
          >
            {message.link.split("/")[2]}
          </MessageLink>
        )}
        {message.sound && <SoundPlayer source={message.sound} />}
      </MessageItem>
    </Layout>
  )
}

export default Message
