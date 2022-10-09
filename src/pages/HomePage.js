import React, { useContext } from 'react';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import FilmThumbnail from '../components/FilmThumbnail';
import FilmThumbnailsListCarousel from '../components/FilmThumbnailsListCarousel';
import { FilmContext } from '../App';


const onLearnMoreClick= () => {

}

const AllFilmsList = () => {
    
    const { movieDetails, setMovieDetails, movieArrays, setMovieArrays } = useContext(FilmContext);

    return (
        <div style={{ display: "flex", justifyContent: "center", width: "100%" }}> 
                <div>
                    <FilmThumbnailsListCarousel movieArrays={movieArrays.results}/>
                </div>
        </div>
    )
}

export default AllFilmsList;
