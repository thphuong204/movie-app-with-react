import React from 'react'
import FilmThumbnail from './FilmThumbnail';
import './../App.css';

function FilmThumbnailsList() {
  return (
    <div className="filmThumbnailsList">
        <FilmThumbnail/>
        <FilmThumbnail/>
    </div>
  )
}

export default FilmThumbnailsList