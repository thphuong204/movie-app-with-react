import React from 'react';
import {Card, CardContent, CardMedia,  Divider, Typography} from '@mui/material';
import './../App.css';

function FilmThumbnail({movieObject}) {
    return (
        <Card 
            className="filmThumbnailCard" 
            sx= {{
                width:{xs:"100px",md:"300px"},
                height:{xs:"100px",md:"300px"},
            }}       
        >
             <CardMedia
        component="img"
        sx={{
            height:{xs:"80px",md:"200px"}
        }}
        image={`https://image.tmdb.org/t/p/original/${movieObject?.poster_path}`}
        alt="green iguana"
      />
            <CardContent
            sx={{
                height:{xs:"20px"},
                padding:{xs:"0px"} 
            }}
            >
                <Typography
                    className="filmThumbnailTitle"
                    gutterBottom
                    component="div" 
                    sx={{
                        height:{xs:"20px", md:"30px"},
                        padding:{xs:"0px"},
                        fontSize:{xs:"10px",md:"20px"}
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