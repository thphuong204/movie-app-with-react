import React from 'react';
import FilmThumbnailsListCarousel from './FilmThumbnailsListCarousel';

function FilmGenresResults() {
  return (
    <div className='content'>
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