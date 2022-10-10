import { createTheme } from '@mui/material';
import { grey, orange, red } from '@mui/material/colors';
import React, { createContext, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LogInPage from './pages/LogInPage';
import FilmDetailsPage from './pages/FilmDetailsPage';
import VideoPlayerPage from './pages/VideoPlayerPage';
import HomePage from './pages/HomePage';
import FilmByGenresPage from './pages/FilmByGenresPage';
import { TestApiComponent } from './components/TestApiComponent';
import { apiV3Discover, apiV3GetMovieDetails } from './apis/tmdb';


const theme = createTheme({
  palette: {
    primary: {
      main: grey[800],
      light: grey[700],
      dark: grey[900],
    },
    secondary: {
      main: red[400],
      light: red[300],
      dark: red[800],
    },
    warning: {
      main: orange[400]
    },
    background: {
      default: grey[900],
    },
    spacing: { xs: 2, sm: 3, md: 5 },
  },
  components: {
    // Name of the component
    MuiPaginationItem: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          color: 'white',
        },
      },
    },

  },
})

const FilmContext = createContext();

function App() {
  const [movieDetails, setMovieDetails] = useState(null);
  const [movieArrays, setMovieArrays] = useState(null);

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
      async function setMovie() {
          const movie = await apiV3GetMovieDetails();
          setMovieDetails(movie);
      }
      setMovie();
  }, [])


  return (
    <div className="App">
      <div>
        <FilmContext.Provider value={{ movieDetails, setMovieDetails, movieArrays, setMovieArrays }}>
          {/* <TestApiComponent /> */}
          {/* <LogInPage/> DONE */}
          {/* <FilmByGenresPage /> */}
          <FilmDetailsPage />
          {/* <VideoPlayerPage /> */}
          {/* <HomePage /> */}
        </FilmContext.Provider>
      </div>
    </div>
  );
}

export default App;
export { FilmContext };