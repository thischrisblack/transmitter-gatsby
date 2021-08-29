import React from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'
import { resizeAlbumImage } from '../utils'
import { setInitialAlbumImageSize } from '../utils'

const MessageItem = styled.div`
    margin: 3rem 1rem 0 0.5rem;
`
const AlbumTitle = styled.span`
    font-weight: 700;
    font-size: 1.7rem;
    color: rgb(44, 9, 9);
    margin-bottom: 0.5rem;
    text-shadow: none;
`

const AlbumYear = styled.span`
    font-size: 1.4rem;
`

const Title = styled.div`
    margin-bottom: 1rem;
`

const Image = styled.div`
    position: relative;
    float: left;
    margin: 0 2rem 1rem 0;
    transition: all 0.2s;
    cursor: pointer;

    &:after {
        content: '';
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

    @media screen and (min-width: 700px) {
        > img {
            position: relative;
        }
    }
`

const StyledParagraph = styled.p`
    margin-bottom: 1rem;
`

const Album = ({ message }) => {
    // Set the image / placeholder size
    let initialImageSize
    if (message.imageRatio) {
        if (window.innerWidth > 700) {
            initialImageSize = setInitialAlbumImageSize(message.imageRatio)
        } else {
            initialImageSize = {
                width: '100%',
                paddingTop: `${message.imageRatio * 99.7}%`,
            }
        }
    }

    return (
        <MessageItem>
            {message.image && (
                <Image
                    // No click if mobile.
                    onClick={
                        window.innerWidth > 700 ? resizeAlbumImage : undefined
                    }
                    style={initialImageSize}
                >
                    <img src={message.image} alt={message.title} />
                </Image>
            )}

            <Title>
                <AlbumTitle>{message.title}</AlbumTitle>
                {message.title !== 'Unreleased Demos' && (
                    <AlbumYear>
                        {' '}
                        ({new Date(message.timestamp).getFullYear()})
                    </AlbumYear>
                )}
            </Title>

            {message.message && (
                <ReactMarkdown
                    source={message.message}
                    renderers={{ paragraph: StyledParagraph }}
                />
            )}

            <div className="clear" />
        </MessageItem>
    )
}

export default Album
