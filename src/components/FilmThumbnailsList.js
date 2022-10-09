import React,{useContext} from 'react'
import FilmThumbnail from './FilmThumbnail';
import './../App.css';
import { FilmContext } from '../App';


function FilmThumbnailsList() {
  const { movieDetails, setMovieDetails, movieArrays, setMovieArrays } = useContext(FilmContext);
  
  return (
    <div className="filmThumbnailsList">
    
      {movieArrays?.map((movieObject)=>{
        return <FilmThumbnail key={movieObject?.id} movieObject={movieObject}/>
      })}
    </div>
  )
}

export default FilmThumbnailsList