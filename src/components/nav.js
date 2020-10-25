import React from 'react'
import { Link } from 'gatsby'
import { Location } from '@reach/router'
import styled from 'styled-components'

const Nav = styled.ul`
    list-style: none;
    float: right;

    @media screen and (min-width: 700px) {
        margin-top: 3rem;
        display: block;
        width: 100%;
        margin-bottom: 1rem;
    }
`

const NavItem = styled.li`
    text-align: right;
    text-transform: uppercase;
    font-size: 1.5rem;
    margin-bottom: 10px;

    > a {
        text-shadow: none;
        text-decoration: none;

        -webkit-text-fill-color: transparent;
        background-clip: text;
        -webkit-background-clip: text;
        background-image: url(../img/static03.gif);
    }

    &.active a {
        font-size: 2.2rem;
    }

    @media screen and (min-width: 700px) {
        font-size: 1.6rem;
        text-align: center;
        margin-bottom: 0.6rem;
    }
`

export default props => (
    <Location>
        {({ location }) => (
            <Nav>
                <NavItem
                    className={
                        'home-nav__item' +
                        (location.pathname === '/messages/' ? ' active' : '')
                    }
                >
                    <Link to="/messages/">messages</Link>
                </NavItem>
                <NavItem
                    className={
                        'home-nav__item' +
                        (location.pathname === '/music/' ? ' active' : '')
                    }
                >
                    <Link to="/music/">music</Link>
                </NavItem>
                <NavItem
                    className={
                        'home-nav__item' +
                        (location.pathname === '/code/' ? ' active' : '')
                    }
                >
                    <Link to="/code/">code</Link>
                </NavItem>
                <NavItem
                    className={
                        'home-nav__item' +
                        (location.pathname === '/video/' ? ' active' : '')
                    }
                >
                    <Link to="/video/">video</Link>
                </NavItem>
                <NavItem
                    className={
                        'home-nav__item' +
                        (location.pathname === '/calendar/' ? ' active' : '')
                    }
                >
                    <Link to="/calendar/">calendar</Link>
                </NavItem>
                <NavItem
                    className={
                        'home-nav__item' +
                        (location.pathname === '/contact/' ? ' active' : '')
                    }
                >
                    <Link to="/contact/">contact</Link>
                </NavItem>
            </Nav>
        )}
    </Location>
)
