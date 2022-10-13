
import React, {  useEffect, useState } from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';
import FilmAppBar from '../components/FilmAppBar';
import { Link, useParams } from "react-router-dom";
import { apiV3GetMovieDetails } from '../apis/tmdb';

function VideoPlayerPage() {

    let {movieId} = useParams();
    let {videoId} = useParams();
    const [movieDetails, setMovieDetails] = useState(null);
    useEffect(() => {
        async function setMovie() {
            const movie = await apiV3GetMovieDetails(movieId);
            setMovieDetails(movie);
        }
        setMovie();
    }, [movieId])

    console.log("movieDetails",movieDetails);

    let movieTitle = movieDetails?.title || "";
    const movieOverview = movieDetails?.overview || "";
    const videoOriginalArr = movieDetails?.videos?.results ;
    const youtubeKey = videoId ;

  return (
    <div id="video-player">
        <div>
          <FilmAppBar/>
        </div>
        <Container className="video-body" fluid>
            <Row>
                <Col className="video-screen">
                    <div className="video-content">
                    <iframe width="420" height="400"
                    src={`https://www.youtube.com/embed/${youtubeKey}`}
                    title={movieTitle}
                    alt="Video is not available right now."
                    >
                    </iframe>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default VideoPlayerPage