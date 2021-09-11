import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import styled from 'styled-components'

const Greeting = styled.div`
    padding: 1rem 0 3rem 0;

    > p {
        margin: 2rem 0;
        font-size: 1.6rem;
    }
`

const Image = styled.div`
    position: relative;
    margin: 0 0 3rem 0;

    &:after {
        content: '';
        background-image: url(../img/static-dark.gif);
        background-size: cover;
        opacity: 0.4;
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
    }
`

export default ({ data }) => (
    <Layout>
        <SEO />
        <Greeting>
            <Image
                style={{
                    width: '100%',
                    paddingTop: `99.7%`,
                }}
            >
                <img
                    src={data.site.siteMetadata.image}
                    alt={data.site.siteMetadata.imageAlt}
                />
            </Image>
            <p>
                This is Chris Black transmitting from an undisclosed location.
                Please remain calm.
            </p>
            <p>
                I play music and write code. I play mostly double bass. I write
                mostly JavaScript. Both music and code are structures made of
                nothing that contain everything.
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
