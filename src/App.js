import React, { createContext, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LogInPage from './pages/LogInPage';
import FilmDetailsPage from './pages/FilmDetailsPage';
import VideoPlayerPage from './pages/VideoPlayerPage';
import HomePage from './pages/HomePage';
import FilmByGenresPage from './pages/FilmByGenresPage';
import { TestApiComponent } from './components/TestApiComponent';
import {apiV3GetToken,apiV3CreateSession, apiV3Discover, apiV3DiscoverAction, apiV3DiscoverCommedy, apiV3DiscoverDramma, apiV3GetMovieDetails, getRequestToken } from './apis/tmdb';

import { Outlet} from "react-router-dom";

const FilmContext = createContext();

function App() {
  const [movieDetails, setMovieDetails] = useState(null);
  const [movieArrays, setMovieArrays] = useState(null);
  const [movieActionArrays,setActionArrays] = useState(null);
  const [movieCommedyArrays,setCommedyArrays] = useState(null);
  const [movieDrammaArrays,setDrammaArrays] = useState(null);
  const [tmdbToken,setTmdbToken] = useState(null);

  useEffect(() => {
    //useEffect warning error when putting async before useEffect arrow function => fixed
    async function setMovieArr() {
      const movieArr = await apiV3Discover();
      setMovieArrays(movieArr.results);
    }
    setMovieArr();
  }, [])

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
      //useEffect warning error when putting async before useEffect arrow function => fixed
      async function setMovie() {
          const movie = await apiV3GetMovieDetails();
          setMovieDetails(movie);
      }
      setMovie();
  }, [])


  // useEffect(() => {
  //   async function askPermission(){
  //     if(!tmdbToken) {
  //       let tmdbTokenTmp = await getRequestToken();
  //       setTmdbToken(tmdbTokenTmp);
  //       const askUserPermission =  () => {
  //         window.location = `https://www.themoviedb.org/authenticate/${tmdbToken}?redirect_to=http://localhost:3000/home`;
  //       } 
  //       askUserPermission();
  //       apiV3CreateSession() 
  //     }
  //   }
  //   askPermission();
  // },[])

  let tmdbTokenTmp ;
  async function askPermission(){
      tmdbTokenTmp = await getRequestToken();
      console.log("tmdbTokenTmp",tmdbTokenTmp)
  }
  
  askPermission();

  return (
    
    <div className="App">
            <div>
            <FilmContext.Provider 
              value={{ 
                movieDetails, setMovieDetails, 
                movieArrays, setMovieArrays,
                movieActionArrays,setActionArrays,
                movieCommedyArrays,setCommedyArrays,
                movieDrammaArrays,setDrammaArrays }}
              >
                <Outlet />
              </FilmContext.Provider>
            </div>
          </div>
   
  );
}

export default App;
export { FilmContext };