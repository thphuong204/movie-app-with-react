import React, { useContext } from 'react';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import FilmThumbnail from '../components/FilmThumbnail';
import FilmThumbnailsListCarousel from '../components/FilmThumbnailsListCarousel';

const data = [];
const fetchPageArrayData = (page) => {
    const size = 5;
    return data.slice((page - 1) * size, page * size);
}
const pageArrayData = [{"a": 1, "id":1},{"a": 2,"id": 2},{"a": 3, "id": 3},{"a": 4, "id":4}]

const onLearnMoreClick= () => {

}

const AllFilmsList = () => {
    
    return (
        <div style={{ display: "flex", justifyContent: "center", width: "100%" }}> 
                <div>
                    <FilmThumbnailsListCarousel />
                </div>
        </div>
    )
}

export default AllFilmsList;
