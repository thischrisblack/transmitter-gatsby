import React, { useState } from 'react'
import styled from 'styled-components'
import { useFirebase } from 'gatsby-plugin-firebase'
import { formatTimer } from '../utils'
import Album from '../components/album'

const PlayList = styled.div``

const PlaylistItem = styled.div`
    padding: 0px 5px;
    border: 1px solid transparent;
    position: relative;
    cursor: pointer;

    &:hover {
        font-weight: 700;
        background: #f6f6f6;
    }

    &.active {
        color: #000;
        border: 1px solid #aaa;
        font-weight: 700;
    }

    @media screen and (max-width: 700px) {
        font-weight: 700;
        padding: .25rem 0;
    }
`

const Timer = styled.span`
    color: #333;
    padding: 0;
    float: right;
    font-weight: 400;
`

const ProgressBar = styled.div`
    background-image: url(../img/static04.gif);
    background-size: 1500px;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    opacity: 0.15;
`

const SongList = ({
    songs,
    playSong,
    nowPlaying,
    progress,
    duration,
    playing,
    filters,
}) => {
    const [albums, setAlbums] = useState({})

    useFirebase(firebase => {
        firebase
            .database()
            .ref('private')
            .orderByChild('type')
            .equalTo('album')
            .once('value')
            .then(snapshot => {
                const result = snapshot.val() || {}
                setAlbums(result)
            })
    }, [])

    if (!songs.length) return <p>No songs.</p>

    nowPlaying = parseInt(nowPlaying)

    const handleClick = event => {
        playSong(event.currentTarget.dataset.track)
    }

    const getAlbumInfo = title => {
        for (const key in albums) {
            if (albums[key].title === title) {
                return albums[key]
            }
        }
    }

    // Enable album name/year display at each new album.
    let prevAlbum, thisAlbum, albumInfo

    return (
        <PlayList>
            {songs.map((song, key) => {
                prevAlbum = thisAlbum
                thisAlbum = song.album

                albumInfo = getAlbumInfo(song.album) || null

                return (
                    <div key={key}>
                        {/* If the current track album is different from the last, and there is no active filter, display the album info */}
                        {albumInfo &&
                            prevAlbum !== thisAlbum &&
                            !filters.genre && (
                                <Album message={albumInfo} type="album" />
                            )}

                        <PlaylistItem
                            key={key}
                            data-track={key}
                            onClick={handleClick}
                            className={
                                // Sets active class if current track is playing.
                                key === nowPlaying && playing && 'active'
                            }
                        >
                            {song.title}
                            {key === nowPlaying && playing && (
                                <span>
                                    <Timer>
                                        {' '}
                                        {formatTimer(progress)} /{' '}
                                        {formatTimer(duration)}
                                    </Timer>
                                    <ProgressBar
                                        className="playlist__progress-bar"
                                        style={{
                                            width:
                                                (progress / duration) * 100 +
                                                '%',
                                        }}
                                    ></ProgressBar>
                                </span>
                            )}
                        </PlaylistItem>
                    </div>
                )
            })}
        </PlayList>
    )
}

export default SongList
