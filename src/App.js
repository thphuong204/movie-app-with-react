import React, { createContext, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {apiV3GetToken,apiV3CreateSession, apiV3SearchMovie, 
  apiV3Discover, 
  apiV3DiscoverAction, apiV3DiscoverCommedy, apiV3DiscoverDramma, getRequestToken } from './apis/tmdb';

import { Outlet} from "react-router-dom";

const FilmContext = createContext();

function App() {
  const [movieActionArrays,setActionArrays] = useState(null);
  const [movieCommedyArrays,setCommedyArrays] = useState(null);
  const [movieDrammaArrays,setDrammaArrays] = useState(null);
  const [tmdbToken,setTmdbToken] = useState(null);
  const [searchQuery,setSearchQuery] = useState(null);
  const [searchResultsArray,setSearchResultsArray] = useState(null);


  useEffect(() => {
    //useEffect warning error when putting async before useEffect arrow function => fixed
    async function setMovieArr() {
      const movieActionArr = await apiV3DiscoverAction();
      setActionArrays(movieActionArr?.results);
    }
    setMovieArr();
  }, [])

  useEffect(() => {
    //useEffect warning error when putting async before useEffect arrow function => fixed
    async function setMovieArr() {
      const movieCommedyArr = await apiV3DiscoverCommedy();
      setCommedyArrays(movieCommedyArr.results);
    }
    setMovieArr();
  }, [])

  useEffect(() => {
    //useEffect warning error when putting async before useEffect arrow function => fixed
    async function setMovieArr() {
      const movieDrammaArr = await apiV3DiscoverDramma();
      setDrammaArrays(movieDrammaArr.results);
    }
    setMovieArr();
  }, [])


  useEffect(() => {
    async function askPermission(){
      let tmdbTokenTmp = await getRequestToken();
      setTmdbToken((prev)=> tmdbTokenTmp); 
    }
    askPermission();
  },[tmdbToken])
  
  useEffect(() => {
    async function getSearchResult(){
      if(searchQuery) {
        let searchResult = await apiV3SearchMovie(searchQuery);
        setSearchResultsArray(searchResult);
      }
    };
    getSearchResult();
  },[searchQuery])

  return (
    
    <div className="App">
            <div>
            <FilmContext.Provider 
              value={{ 
                movieActionArrays,setActionArrays,
                movieCommedyArrays,setCommedyArrays,
                movieDrammaArrays,setDrammaArrays,
                searchQuery,setSearchQuery,
                searchResultsArray
               }}
              >
                <Outlet />
              </FilmContext.Provider>
            </div>
          </div>
   
  );
}

export default App;
export { FilmContext };