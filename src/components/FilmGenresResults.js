import React, { useContext } from 'react';
import FilmThumbnailsListCarousel from './FilmThumbnailsListCarousel';
import { FilmContext } from '../App';

function FilmGenresResults() {
  const { 
    movieActionArrays, setActionArrays, 
    movieCommedyArrays, setCommedyArrays, 
    movieDrammaArrays, setDrammaArrays } = useContext(FilmContext);

  return (
    <div id="film-genres-results" className='content'>
      <div className="filmThumbnailsListCarousel">
        <div style={{color:"white", fontWeight:"bold", fontSize:"20px"}}>Action</div>
        <FilmThumbnailsListCarousel movieArrays={movieActionArrays}/>
      </div>
      <div className="filmThumbnailsListCarousel">
        <div style={{color:"white", fontWeight:"bold", fontSize:"20px"}}>Commedy</div>
        <FilmThumbnailsListCarousel movieArrays={movieCommedyArrays}/>
      </div>
      <div className="filmThumbnailsListCarousel">
        <div style={{color:"white", fontWeight:"bold", fontSize:"20px"}}>Dramma</div>
        <FilmThumbnailsListCarousel movieArrays={movieDrammaArrays}/>
      </div>
    </div>
  )
}

export default FilmGenresResults