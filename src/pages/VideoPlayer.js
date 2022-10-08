
import React from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';
import FilmAppBar from '../components/FilmAppBar';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseIcon from '@mui/icons-material/Pause';

function VideoPlayer() {
  return (
    <div id="video-player">VideoPlayer
        <div>
          <FilmAppBar/>
        </div>
        <Container className="video-body" fluid>
            <Row>
                <Col className="video-screen">
                    <div className="video-content">Video</div>
                    <div className="video-button">
                        <SkipPreviousIcon className="button prevNext-button"/>
                        <PauseIcon className="button play-button"/>
                        <PlayCircleIcon className="button play-button"/>
                        <SkipNextIcon className="button prevNext-button"/>
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
                                <Container className="selection_season" style={{backgroundColor:"black"}}>Season 1</Container>
                            </Accordion.Header>
                            <Accordion.Body>
                                    <ul>
                                        <li className="selection_ep-name">Ep1</li>
                                        <li className="selection_ep-name">Ep2</li>
                                    </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="0" className="accordion-item">
                            <Accordion.Header >
                                <Container className="selection_season" style={{backgroundColor:"black"}}>Trailer</Container>
                            </Accordion.Header>
                            <Accordion.Body>
                                    <ul>
                                        <li className="selection_ep-name">Trailer 1</li>
                                        <li className="selection_ep-name">Trailer 2</li>
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

export default VideoPlayer