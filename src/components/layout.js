import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Nav from './nav'
import Logo from './logo'

const Container = styled.div`
    display: grid;
    grid-template-rows: min-content min-content;
    grid-template-areas:
        'sidebar'
        'content';
    @media screen and (min-width: 700px) {
        grid-template-columns: 24rem minmax(0, 104rem) auto;
        grid-template-areas: 'sidebar content .';
    }
`

const Header = styled.div`
    grid-area: sidebar;
    margin-bottom: 0;
    padding: 1rem;

    > a {
        text-decoration: none;
    }
    @media screen and (min-width: 700px) {
        position: fixed;
        top: 3rem;
        left: 3rem;
        width: 18rem;
        padding: 0;
    }
`

const Main = styled.div`
    grid-area: content;
    padding: 1rem;

    border-top: 5px solid black;

    border-image-source: url(img/static06.gif);
    border-image-slice: 1;
    border-image-width: 1;
    border-image-outset: 0;
    border-image-repeat: round;
    @media screen and (min-width: 700px) {
        min-height: 100vh;
        padding-left: 4rem;
        border-top: 0;
        border-left: 5px solid black;
    }
`

export default ({ children }) => {
    return (
        <Container>
            <Header>
                <Link to="/">
                    <Logo width="180" />
                </Link>
                <Nav />
            </Header>
            <Main>{children}</Main>
        </Container>
    )
}
