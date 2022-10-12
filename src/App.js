import React, { createContext, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { apiV3SearchMovie, getRequestToken } from './apis/tmdb';

import { Outlet} from "react-router-dom";

const FilmContext = createContext();

function App() {
  const [tmdbToken,setTmdbToken] = useState(null);
  const [searchQuery,setSearchQuery] = useState(null);
  const [searchResultsArray,setSearchResultsArray] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

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
                searchQuery,setSearchQuery,
                searchResultsArray,loggedIn, setLoggedIn 
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