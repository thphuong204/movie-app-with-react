import React from 'react';
import {Card, CardContent, CardMedia,  Divider, Typography} from '@mui/material';
import './../App.css';

function FilmThumbnail({movieObject}) {
    return (
        <Card 
            className="filmThumbnailCard" 
            sx= {{
                width:{xs:"200px",md:"300px"},
                height:{xs:"200px",md:"300px"},
            }}       
        >
             <CardMedia
        component="img"
        sx={{
            height:{xs:"120px",md:"200px"}
        }}
        image={`https://image.tmdb.org/t/p/w342/${movieObject?.poster_path }`}
        alt="green iguana"
      />
            <CardContent
            sx={{
                height:{xs:"80px"},
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