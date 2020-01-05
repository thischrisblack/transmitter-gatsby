import React, { Component } from "react"
import styled from "styled-components"
import { formatTimer } from "../utils"

const Player = styled.div`
  font-size: 1.4rem;
  padding: 0 0 0.5rem 0;
`

const Controls = styled.span`
  display: inline-block;
  width: 5rem;
  font-weight: 700;
  cursor: pointer;
  padding: 0;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  background-image: url(../img/static01.gif);
  background-size: 12000%;
`

const Timer = styled.span`
  color: #333;
  padding: 0;
`

const ProgressBar = styled.span`
  background-image: url(../img/static04.gif);
  background-size: cover;
  height: 1px;
  display: block;
`

class SoundPlayer extends Component {
  state = {
    playing: false,
    duration: "",
    progress: 0,
    progressPercent: 0,
    trackLoadError: false,
  }

  soundRef = React.createRef()

  toggleAudio = () => {
    this.setState({ playing: !this.state.playing })
    if (this.state.playing) {
      this.soundRef.current.pause()
      this.soundRef.current.currentTime = 0
    } else {
      this.soundRef.current.play()
    }
  }

  audioReady = () => {
    this.setState({
      duration: this.soundRef.current.duration,
    })
  }

  updateProgress = () => {
    this.setState({ progress: this.soundRef.current.currentTime })
    const percent = this.state.progress / this.state.duration
    this.setState({ progressPercent: percent })
  }

  resetAudio = () => {
    this.setState({
      playing: false,
      progress: 0,
      progressPercent: 0,
    })
  }

  trackLoadError = () => {
    this.setState({ trackLoadError: true })
  }

  render() {
    return (
      <Player>
        {this.state.trackLoadError && (
          <p className="error">
            At this time it seems I have surpassed my bandwidth quota for the
            day. Please try again tomorrow.
          </p>
        )}
        <audio
          src={this.props.source}
          ref={this.soundRef}
          onCanPlay={this.audioReady}
          onTimeUpdate={this.updateProgress}
          onEnded={this.resetAudio}
          preload="none"
          onError={this.trackLoadError}
        >
          <p>Your browser doesn't support HTML5 audio.</p>
        </audio>
        <Controls onClick={this.toggleAudio}>
          {/* {this.state.playing ? "◼" : "▶"} */}
          {this.state.playing ? "STOP" : "PLAY"}
        </Controls>
        {this.state.duration && (
          <Timer>
            {formatTimer(this.state.progress)} /{" "}
            {formatTimer(this.state.duration)}
          </Timer>
        )}
        <ProgressBar
          style={{ width: this.state.progressPercent * 100 + "%" }}
        />
      </Player>
    )
  }
}

export default SoundPlayer
