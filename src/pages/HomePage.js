import React, { useEffect, useState } from 'react';
import FilmThumbnailsListCarousel from '../components/FilmThumbnailsListCarousel';
import FilmAppBar from '../components/FilmAppBar';
import { Link, useParams } from 'react-router-dom';
import { apiV3Discover } from '../apis/tmdb';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';


const HomePage = () => {
    const [movieArrays, setMovieArrays] = useState(null);
    let {pageId} = useParams();
    let page = parseInt(pageId) || 1;
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

    function Content({ handlePageArrayData }) {
    
        return (
          
         <div className="pagination-item"
                   style={{
                       display: "flex",
                       justifyContent: 'center',
                       marginTop: "20px",
                   }}>
                   <Pagination
                       page={page}
                       count={10}
                       showFirstButton 
                       showLastButton
                       renderItem={(item) => (
                           <PaginationItem
                               style={{
                                   fontWeight: "bold",
                                   fontSize: "18px",
                                   color:"white"
                               }}
                               component={Link}
                               to={`/discover/${item.page || 1}`}
                               {...item}
                               onClick={(e) => handlePageArrayData(e)}
                           />
                       )}
                   />
               </div>
        )
       }

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
                <Content/>
        </div>
    )
}

export default HomePage;
