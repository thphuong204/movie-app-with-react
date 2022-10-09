import React from 'react';
import FilmThumbnailsListCarousel from './FilmThumbnailsListCarousel';

function FilmGenresResults() {
  return (
    <div id="film-genres-results" className='content'>
      <div>
        <FilmThumbnailsListCarousel/>
      </div>
      <div>
        <FilmThumbnailsListCarousel/>
      </div>
      <div>
        <FilmThumbnailsListCarousel/>
      </div>
    </div>
  )
}

export default FilmGenresResults