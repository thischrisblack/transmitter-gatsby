import React, { useState } from 'react'
import styled from 'styled-components'
import { formatTimer } from '../utils'

const Player = styled.div`
    padding: 0 0 0.5rem 0;
`

const Controls = styled.span`
    display: inline-block;
    width: 7rem;
    font-weight: 700;
    cursor: pointer;
    padding: 0;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    background-image: url(../img/static-grainy.gif);
    background-size: 1700%;
    font-size: 2rem;
`

const Timer = styled.span`
    color: #333;
    padding: 0;
    font-size: 1.6rem;
`

const ProgressBar = styled.span`
    background-image: url(../img/static-grainy.gif);
    background-size: cover;
    height: 2px;
    display: block;
    margin-top: 0.5rem;
`

const SoundPlayer = props => {
    const [playing, setPlaying] = useState(false)
    const [duration, setDuration] = useState('')
    const [progress, setProgress] = useState(0)
    const [progressPercent, setProgressPercent] = useState(0)
    const [trackLoadError, setTrackLoadError] = useState(false)

    const soundRef = React.createRef()

    const toggleAudio = () => {
        setPlaying(!playing)
        if (playing) {
            soundRef.current.pause()
            soundRef.current.currentTime = 0
        } else {
            soundRef.current.play()
        }
    }

    const audioReady = () => {
        setDuration(soundRef.current.duration)
    }

    const updateProgress = () => {
        setProgress(soundRef.current.currentTime)
        const percent = progress / duration
        setProgressPercent(percent)
    }

    const resetAudio = () => {
        setPlaying(false)
        setProgress(0)
        setProgressPercent(0)
    }

    const toggleTrackLoadError = () => {
        setTrackLoadError(true)
    }

    return (
        <Player>
            {trackLoadError && (
                <p className="error">
                    At this time it seems I have surpassed my bandwidth quota
                    for the day. Please try again tomorrow.
                </p>
            )}
            <audio
                src={props.source}
                ref={soundRef}
                onCanPlay={audioReady}
                onTimeUpdate={updateProgress}
                onEnded={resetAudio}
                preload="none"
                onError={toggleTrackLoadError}
            >
                <p>Your browser doesn't support HTML5 audio.</p>
            </audio>

            {playing && <Controls onClick={toggleAudio}>STOP</Controls>}
            {!playing && <Controls onClick={toggleAudio}>PLAY</Controls>}

            {playing && (
                <Timer>
                    {formatTimer(progress)} / {formatTimer(duration)}
                </Timer>
            )}
            <ProgressBar style={{ width: progressPercent * 100 + '%' }} />
        </Player>
    )
}

export default SoundPlayer
