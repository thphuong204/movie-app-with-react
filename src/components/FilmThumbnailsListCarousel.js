import React ,{ useState } from 'react';
import FilmThumbnailsList from './FilmThumbnailsList';


// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

function FilmThumbnailsListCarousel({movieArrays}) {
  

  return (
            <>
            <FilmThumbnailsList movieArrays={movieArrays}/>
            </>
  );
}

export default FilmThumbnailsListCarousel;