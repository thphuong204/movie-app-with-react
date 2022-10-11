import React, { useContext } from 'react';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import FilmThumbnail from '../components/FilmThumbnail';
import FilmThumbnailsListCarousel from '../components/FilmThumbnailsListCarousel';
import FilmAppBar from '../components/FilmAppBar';
import { FilmContext } from '../App';



const onLearnMoreClick= () => {

}


const HomePage = () => {
    const { movieDetails, setMovieDetails, movieArrays, setMovieArrays } = useContext(FilmContext);
    
    return (
        <div id="allFilmsList"> 
                <div className="wrapper">
                    <FilmAppBar/>
                </div>
                
                <div className="welcome-text"> Welcome to our website movie. 
                    <br/>
                    We really appreciate our customers and hope you have great experience with us.
                </div>
                <FilmThumbnailsListCarousel movieArrays={movieArrays}/>
        </div>
    )
}

export default HomePage;
