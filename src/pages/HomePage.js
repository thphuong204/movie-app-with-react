import React, { useContext } from 'react';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import FilmThumbnail from '../components/FilmThumbnail';
import FilmThumbnailsListCarousel from '../components/FilmThumbnailsListCarousel';



const onLearnMoreClick= () => {

}

const AllFilmsList = () => {
    
    return (
        <div id="allFilmsList"> 
                    <FilmThumbnailsListCarousel/>
        </div>
    )
}

export default AllFilmsList;
