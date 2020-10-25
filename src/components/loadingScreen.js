import React from 'react'
import styled from 'styled-components'

const LoadingScreen = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    z-index: 10;
    background-image: url('../img/static03.gif');
    background-size: cover;
    padding: 5rem 4rem;
    font-size: 6rem;
    color: #eee;
    font-family: 'VT323', monospace;
    text-shadow: 0 0 3px rgba(255, 255, 255, 1);
`

const Loading = ({ message }) => <LoadingScreen>{message}</LoadingScreen>

export default Loading
