import React, { useContext } from 'react'
import FilmThumbnail from './FilmThumbnail';
import './../App.css';
import { FilmContext } from '../App';
import Carousel from 'react-multi-carousel';

import "react-multi-carousel/lib/styles.css";


function FilmThumbnailsList() {
  const { movieDetails, setMovieDetails, movieArrays, setMovieArrays } = useContext(FilmContext);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className="filmThumbnailsList">

      {movieArrays?.map((movieObject) => {
        return <FilmThumbnail key={movieObject?.id} movieObject={movieObject} />
      })}
    </div>
  )
}

export default FilmThumbnailsList