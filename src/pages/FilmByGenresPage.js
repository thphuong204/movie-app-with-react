import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { apiV3DiscoverAction, apiV3DiscoverCommedy, apiV3DiscoverDramma } from '../apis/tmdb';
import FilmAppBar from '../components/FilmAppBar'
import FilmGenresResults from '../components/FilmGenresResults'

function FilmByGenresPage() {
  let {pageId}= useParams();

  const [movieActionArrays,setActionArrays] = useState(null);
  const [movieCommedyArrays,setCommedyArrays] = useState(null);
  const [movieDrammaArrays,setDrammaArrays] = useState(null);

  useEffect(() => {
    //useEffect warning error when putting async before useEffect arrow function => fixed
    async function setMovieArr() {
      const movieActionArr = await apiV3DiscoverAction(pageId);
      setActionArrays(movieActionArr?.results);
    }
    setMovieArr();
  }, [pageId])

  useEffect(() => {
    //useEffect warning error when putting async before useEffect arrow function => fixed
    async function setMovieArr() {
      const movieCommedyArr = await apiV3DiscoverCommedy(pageId);
      setCommedyArrays(movieCommedyArr.results);
    }
    setMovieArr();
  }, [pageId])

  useEffect(() => {
    //useEffect warning error when putting async before useEffect arrow function => fixed
    async function setMovieArr() {
      const movieDrammaArr = await apiV3DiscoverDramma(pageId);
      setDrammaArrays(movieDrammaArr.results);
    }
    setMovieArr();
  }, [pageId])


  return (
    <div>
        <FilmAppBar/>
        <FilmGenresResults movieActionArrays={movieActionArrays} movieCommedyArrays={movieCommedyArrays} movieDrammaArrays={movieDrammaArrays}/>
    </div>
  )
}

export default FilmByGenresPage