
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
        <Container  className="selection-group" fluid>
            <Row>
                <Col className="selection-screen">
                    <Accordion>
                        <Accordion.Item eventKey="0" className="accordion-item">
                            <Accordion.Header >
                                <Container className="selection_season" style={{backgroundColor:"black"}}>
                                    {`${movieTitle}  - Overview`}
                                </Container>
                            </Accordion.Header>
                            <Accordion.Body>
                                    <ul>
                                        <li className="selection_ep-name">{movieOverview}</li>
                                    </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" className="accordion-item">
                            <Accordion.Header >
                                <Container className="selection_season" style={{backgroundColor:"black"}}>Episode</Container>
                            </Accordion.Header>
                            <Accordion.Body>
                                    <ul>
                                        {videoOriginalArr?.slice(0,2).map((videoObject,i)=>{
                                            return (
                                                <div key={i}>
                                                <Link  
                                                    className="selection_ep-name"
                                                    to={`/details/:movieId/videoplayer/${videoObject?.key}`}
                                                // onClick={ () => {navigate(`/details/:movieId/videoplayer/${videoObject?.key}`)}}
                                                >
                                                        {videoObject?.name}
                                                </Link>
                                                </div>
                                            )
                                        })}
                                    </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default VideoPlayerPage