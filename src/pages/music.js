import React, { useState, useEffect } from "react"
import { getUniqueKeys } from "../utils"
import Layout from "../components/layout"
import SongList from "../components/songlist"
import TypeList from "../components/typelist"
import Loading from "../components/loadingScreen"
import GetPosts from "../components/getPosts"
import SEO from "../components/seo"
import styled from "styled-components"

const MusicContainer = styled.div`
  padding: 1rem 0 3rem 0;
`

const MusicIntro = styled.div`
  margin-bottom: 4rem;
  > h2 {
    margin-bottom: 1rem;
  }
`

const Music = ({ messages, loading }) => {
  const [songs, setSongs] = useState([])
  const [filteredSongs, setFilteredSongs] = useState([])
  const [filters, setFilters] = useState({})
  const [nowPlaying, setNowPlaying] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [duration, setDuration] = useState("")
  const [progress, setProgress] = useState(0)
  const [trackLoadError, setTrackLoadError] = useState(false)

  const soundRef = React.createRef()

  useEffect(() => {
    let newFilteredSongs = [...songs]

    Object.keys(filters).forEach(filter => {
      filters[filter] &&
        (newFilteredSongs = newFilteredSongs.filter(
          song => song[filter] === filters[filter]
        ))
    })

    resetAudio()
    setFilteredSongs(newFilteredSongs)
    setNowPlaying(null)
  }, [filters, songs])

  useEffect(() => {
    if (soundRef.current) {
      if (!playing) {
        soundRef.current.pause()
        soundRef.current.currentTime = 0
      } else {
        soundRef.current.play()
      }
    }
  }, [playing, soundRef])

  if (!loading && !songs.length) {
    const songsList = messages || {}

    // Sort songsList by year, album, then track number.
    songsList.sort((a, b) => {
      const year = b.year.localeCompare(a.year)
      const album = a.album.localeCompare(b.album)
      const track = a.track.localeCompare(b.track, undefined, {
        numeric: true,
        sensitivity: "base",
      })
      return year || album || track
    })
    setSongs(songsList)
    setFilteredSongs(songsList)
  }

  const updateFilter = event => {
    const { key, value } = event.target.dataset
    setFilters({
      [key]: value,
    })
  }

  // PLAYER FUNCTIONS

  const playSong = songId => {
    if (songId === nowPlaying) {
      setPlaying(!playing)
    } else {
      resetAudio()
      setNowPlaying(songId)
      setPlaying(true)
    }
  }

  const audioReady = () => {
    setDuration(soundRef.current.duration)
  }

  const updateProgress = () => {
    setProgress(soundRef.current.currentTime)
  }

  const resetAudio = () => {
    setPlaying(false)
    setProgress(0)
  }

  const playNextSong = () => {
    // If the current song is the last song of the array, stop, otherwise, play the next one.
    if (nowPlaying === filteredSongs.length - 1) {
      resetAudio()
    } else {
      resetAudio()
      setNowPlaying(parseInt(nowPlaying) + 1)
    }
  }

  const trackLoadErrorAlert = () => {
    setTrackLoadError(true)
  }

  return (
    <Layout>
      {loading && <Loading message="Loading..." />}

      <SEO
        title="The music of Chris Black"
        description="Stream and purchase the music of Chris Black, including his most recent release for contrabass and percussion: Everything Happens for a Reason."
        image="/img/bass-01.jpg"
        pathname="/music/"
      />

      <MusicContainer>
        
        <MusicIntro>
          <h2>The music of Chris Black.</h2>
          <p>
            Most of this music is available for purchase and download at{" "}
            <a href="https://chrisblackmusic.bandcamp.com/">Bandcamp</a>. You
            can also read more about my musical history and the things people
            have said about it <a href="/about-music">here</a>.
          </p>
        </MusicIntro>

        {filteredSongs[nowPlaying] && (
          <audio
            src={filteredSongs[nowPlaying].url}
            ref={soundRef}
            onCanPlay={() => audioReady()}
            onTimeUpdate={() => updateProgress()}
            onEnded={() => playNextSong()}
            onError={() => trackLoadErrorAlert()}
            preload="none"
          >
            <p>Your browser doesn't support HTML5 audio.</p>
          </audio>
        )}

        <TypeList
          types={getUniqueKeys(songs, "genre")}
          updateFilter={event => updateFilter(event)}
          filterCategory="genre"
          activeFilter={filters.genre}
        />

        {trackLoadError && (
          <p className="error">
            At this time it seems I have surpassed my bandwidth quota for the
            day. Please try again tomorrow.
          </p>
        )}

        <SongList
          songs={filteredSongs}
          playSong={playSong}
          nowPlaying={nowPlaying}
          progress={progress}
          duration={duration}
          playing={playing}
          filters={filters}
        />
      </MusicContainer>
    </Layout>
  )
}

export default GetPosts(Music)
