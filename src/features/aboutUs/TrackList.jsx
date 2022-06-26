import React from 'react';
import './TrackList.css';

function TrackList({ tracks = [] }) {
    const renderTrack = ({ id, albumIconUrl, name, album, year }) => (
        <div className='track-row' key={id}>
            <img className='album-icon' src={albumIconUrl} alt='album-icon' />
            <span className='track-name'>{name}</span>
            <span className='album-name'>{album}</span>
            <span className='album-year'>{year}</span>
        </div>
    )
  return (
    <div className='tracklist-container'>
        <h2 className='tracklist-header'>Top Tracks</h2>
        {tracks.map(renderTrack)}
    </div>
  )
}

export default TrackList