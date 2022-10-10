import React, { useContext } from 'react';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import FilmThumbnail from '../components/FilmThumbnail';
import FilmThumbnailsListCarousel from '../components/FilmThumbnailsListCarousel';
import FilmAppBar from '../components/FilmAppBar';



const onLearnMoreClick= () => {

}


const AllFilmsList = () => {
    
    return (
        <div id="allFilmsList"> 
                <FilmAppBar/>
                <FilmThumbnailsListCarousel/>
        </div>
    )
}

export default AllFilmsList;
