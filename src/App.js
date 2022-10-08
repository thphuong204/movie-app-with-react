import { createTheme } from '@mui/material';
import { grey, orange, red } from '@mui/material/colors';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FilmGenresResults from './components/FilmGenresResults';
import FilmAppBar from './components/FilmAppBar';
import LogIn from './pages/LogIn';
import FilmDetails from './pages/FilmDetails';
import VideoPlayer from './pages/VideoPlayer';

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

function App() {
  return (
    <div className="App">
      <div>
      {/* <LogIn/> */}
      {/* <FilmAppBar/>
      <FilmGenresResults/> */}
      {/* <FilmDetails/> */}
      <VideoPlayer/>
      </div>
    </div>
  );
}

export default App;
