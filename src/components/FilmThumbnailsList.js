import React, { useContext } from 'react'
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
       <Slider {...settings}>
          {movieArrays?.slice(0,10).map((movieObject)=>{
            return (
                <FilmThumbnail key={movieObject?.id} movieObject={movieObject}/>
              
              )
          })}
          </Slider>
   
    </div>
  )
}

export default FilmThumbnailsList