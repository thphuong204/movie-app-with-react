import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { apiV3DiscoverAction, apiV3DiscoverCommedy, apiV3DiscoverDramma } from '../apis/tmdb';
import FilmAppBar from '../components/FilmAppBar';
import FilmGenresResults from '../components/FilmGenresResults';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';

function FilmByGenresPage() {
  let {pageId}= useParams();
  let page = parseInt(pageId) || 1;

  const [movieActionArrays,setActionArrays] = useState(null);
  const [movieCommedyArrays,setCommedyArrays] = useState(null);
  const [movieDrammaArrays,setDrammaArrays] = useState(null);

  useEffect(() => {
    //useEffect warning error when putting async before useEffect arrow function => fixed
    async function setMovieArr() {
      const movieActionArr = await apiV3DiscoverAction(pageId);
      setActionArrays(movieActionArr?.results);
    }
    setMovieArr();
  }, [pageId])

  useEffect(() => {
    //useEffect warning error when putting async before useEffect arrow function => fixed
    async function setMovieArr() {
      const movieCommedyArr = await apiV3DiscoverCommedy(pageId);
      setCommedyArrays(movieCommedyArr.results);
    }
    setMovieArr();
  }, [pageId])

  useEffect(() => {
    //useEffect warning error when putting async before useEffect arrow function => fixed
    async function setMovieArr() {
      const movieDrammaArr = await apiV3DiscoverDramma(pageId);
      setDrammaArrays(movieDrammaArr.results);
    }
    setMovieArr();
  }, [pageId])


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
                   renderItem={(item) => (
                       <PaginationItem
                           style={{
                               fontWeight: "bold",
                               fontSize: "18px",
                               color:"white"
                           }}
                           component={Link}
                           to={`/genres/${item.page || 1}`}
                           {...item}
                           onClick={(e) => handlePageArrayData(e)}
                       />
                   )}
               />
           </div>
    )
   }

  
  return (
    <div>
        <FilmAppBar/>
        <FilmGenresResults movieActionArrays={movieActionArrays} movieCommedyArrays={movieCommedyArrays} movieDrammaArrays={movieDrammaArrays}/>
        <Content/>
    </div>
  )
}

export default FilmByGenresPage