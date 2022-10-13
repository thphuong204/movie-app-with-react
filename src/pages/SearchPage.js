import React, { useContext } from 'react'
import { FilmContext } from '../App';
import FilmAppBar from '../components/FilmAppBar';
import FilmThumbnailsListCarousel from '../components/FilmThumbnailsListCarousel'

function SearchPage() {
    const { searchResultsArray} = useContext(FilmContext);

  return (
    <div id="search-page">
        <div className="wrapper"><FilmAppBar/></div>
        <div className="wrapper"><FilmThumbnailsListCarousel movieArrays={searchResultsArray} /></div>
        
    </div>
  )
}

export default SearchPage