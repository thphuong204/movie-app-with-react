
import React, { useContext, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image  from 'react-bootstrap/Image';
import FilmAppBar from '../components/FilmAppBar';
import './../App.css';
import { FilmContext } from '../App';

function FilmDetailsPage() {
  const {movieDetails} = useContext(FilmContext);
  let movieTitle = movieDetails?.title || "";
  const movieImage = movieDetails?.images?.posters?.[0]?.file_path || null;
  const movieOverview = movieDetails?.overview || "";
  const movieGenresOriginalArr = movieDetails?.genres;
  const productionCompaniesOriginalArr = movieDetails?.production_companies;
  const castOriginalArr = movieDetails?.credits?.cast


  return (
    <div id="filmDetails" style={{backgroundColor:"grey"}}>
        <div>
          <FilmAppBar/>
        </div>
        <Container fluid className="filmDetailsBody">
            <Container fluid className="filmDetailsBody_header px-0">
              <Image className="filmDetailsBody_image"
              image="./../../public/logo512.png"
              alt="img of film">
              </Image >
              <Container fluid className="filmDetailsBody_title">{movieTitle}</Container>
            </Container>
            <Container fluid className="filmDetailsBody_description">
              <Row className="w-100">
                <Col className="description"  >
                  <Container className="description-type">
                    {`Production Companies:`}
                  </Container>
                  <Container className="description-genre" >
                   <span>Genres: </span> 
                   {movieGenresOriginalArr?.map((genreObject,i)=> {
                    return (<span key={i}>{`${genreObject?.name} `}</span>)
                   })}
                  </Container>
                  <Container className="description-cast" >
                    Cast:
                  </Container>
                  <Container className="description-content">
                    {`Description: ${movieOverview}`}
                  </Container>
                </Col>
                
                <Col  className="episode-guide">
                    <Container className="episode-guide-title">Episode guide:</Container> 
                    <Container className="duration">Duration: 1hour 30 minutes</Container> 
                    <Container className="season-name">Season 1
                      <ul>
                        <li className="episode-name">Ep1</li>
                      </ul>
                    </Container>
                    <Container className="trailer">
                      Trailer
                    </Container>
                </Col>
                </Row>
            </Container>
        </Container>
    </div>
  )
}

export default FilmDetailsPage