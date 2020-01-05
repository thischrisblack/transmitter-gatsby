import React, { Component } from "react"

import { formatTimer } from "../utils"

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
      <div className="sound-player">
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
        <span className="sound-player__controls" onClick={this.toggleAudio}>
          {/* {this.state.playing ? "◼" : "▶"} */}
          {this.state.playing ? "STOP" : "PLAY"}
        </span>
        {this.state.duration && (
          <span className="sound-player__timer">
            {formatTimer(this.state.progress)} /{" "}
            {formatTimer(this.state.duration)}
          </span>
        )}
        <div
          className="sound-player__progress-bar"
          style={{ width: this.state.progressPercent * 100 + "%" }}
        />
      </div>
    )
  }
}

export default SoundPlayer
