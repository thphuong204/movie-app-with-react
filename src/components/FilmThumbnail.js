import React from 'react';
import {Card, CardContent, CardMedia,  Divider, Typography} from '@mui/material';
import './../App.css';

function FilmThumbnail() {
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
        image="./../../public/logo192.png"
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
                    title
                </Typography>
                <Divider variant="middle" color="white" sx={{ margin: {sx:"1px",md:1 }}} />
                
                <Typography 
                className="filmThumbnailDescription" 
                display={{xs:"none"}}
                height={{xs:"0px"}}>
                    description
                </Typography>
            </CardContent>
        </Card>
    );
}

export default FilmThumbnail