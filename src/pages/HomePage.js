import React, { useContext, useEffect, useState } from 'react';
import FilmThumbnailsListCarousel from '../components/FilmThumbnailsListCarousel';
import FilmAppBar from '../components/FilmAppBar';
import { FilmContext } from '../App';
import { useParams } from 'react-router-dom';
import { apiV3Discover } from '../apis/tmdb';



const HomePage = () => {
    const [movieArrays, setMovieArrays] = useState(null);
    let {pageId} = useParams();
    console.log("pageId",pageId);

    useEffect(() => {
        async function setMovieArr() {
          const movieArr = await apiV3Discover(pageId);
          setMovieArrays(movieArr.results);
        }
        setMovieArr();
      },[pageId]);
      
    console.log(
        "movieArrays",movieArrays
    )
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
