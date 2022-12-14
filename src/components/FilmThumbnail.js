import React from 'react';
import {Card, CardContent, CardMedia,  Divider, Typography} from '@mui/material';
import './../App.css';
import { useNavigate } from 'react-router-dom';

function FilmThumbnail({movieObject}) {
    const navigate = useNavigate();
    return (
        <Card 
            id={movieObject?.id}
            className="filmThumbnailCard" 
            sx= {{
                width:{xs:"200px",md:"240px"},
                height:{xs:"360px",md:"440px"},
            }}   
            onClick={() =>{navigate(`/details/${movieObject?.id}`)}}    
        >
             <CardMedia
        component="img"
        sx={{
            height:{xs:"260px",md:"320px"}
        }}
        image={movieObject.poster_path ? `https://image.tmdb.org/t/p/w342/${movieObject.poster_path}` : ""}
        alt="The image is not available right now. Please try again later."
      />
            <CardContent
            sx={{
                height:{xs:"100px",md:"120px"},
                padding:{xs:"0px"} 
            }}
            >
                <Typography
                    className="filmThumbnailTitle"
                    gutterBottom
                    component="div" 
                    sx={{
                        height:{xs:"30px",md:"40px"},
                        padding:{xs:"0px", md:"0px"},
                    }}
                >
                   {movieObject?.title}
                </Typography>
                <Divider variant="middle" color="white" sx={{ margin: {sx:"1px",md:1 }}} />
                
                <Typography 
                className="filmThumbnailDescription" 
                >
                    {movieObject?.overview}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default FilmThumbnail