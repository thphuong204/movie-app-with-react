import React from 'react'
import FilmThumbnail from './FilmThumbnail';
import './../App.css';
import Slider from "react-slick";

function FilmThumbnailsList({movieArrays}) {

  const settings = {
    dots: true,
    infinite: true, 
    speed:1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: false
  };

  return (
    <div className="filmThumbnailsList">
      {movieArrays?.length ?  
      <Slider {...settings}>
      {movieArrays?.map((movieObject)=>{
        return (
            <FilmThumbnail key={movieObject?.id} movieObject={movieObject}/>
          
          )
      })}
      </Slider> 
      : <div 
          className="wrapper" 
          style={{
            color:"white",
            fontWeight:"bold"
          }}
        >
        There are no results that match your search</div>
      }
       
   
    </div>
  )
}

export default FilmThumbnailsList