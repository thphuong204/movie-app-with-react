
import React, { useContext } from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';
import FilmAppBar from '../components/FilmAppBar';
import { FilmContext } from '../App';

function VideoPlayerPage() {
    const {movieDetails} = useContext(FilmContext);
    let movieTitle = movieDetails?.title || "";
    const movieOverview = movieDetails?.overview || "";
    const videoOriginalArr = movieDetails?.videos?.results ;
    const youtubeKey = "1kNYq379pIc" ;

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

                                                <li key={i} className="selection_ep-name">
                                                    <a href="!#">
                                                        {videoObject?.name}
                                                    </a>
                                                </li>
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