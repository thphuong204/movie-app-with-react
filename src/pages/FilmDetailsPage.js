
import React, { useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FilmAppBar from '../components/FilmAppBar';
import './../App.css';
import { Link, useParams } from "react-router-dom";
import { apiV3GetMovieDetails } from '../apis/tmdb';

function FilmDetailsPage() {
  let {movieId} = useParams();
 
  const [movieDetails, setMovieDetails] = useState(null);
  useEffect(() => {
    async function setMovie() {
        const movie = await apiV3GetMovieDetails(movieId);
        setMovieDetails(movie);
    }
    setMovie();
  }, [movieId])

  let movieTitle = movieDetails?.title || "";
  const movieImage = movieDetails?.images?.posters?.[0]?.file_path || null;
  const movieOverview = movieDetails?.overview || "";
  const movieGenresOriginalArr = movieDetails?.genres;
  const productionCompaniesOriginalArr = movieDetails?.production_companies;
  const castOriginalArr = movieDetails?.credits?.cast
  const videoOriginalArr = movieDetails?.videos?.results

  return (
    <div id="filmDetails" style={{backgroundColor:"grey"}}>
        <div>
          <FilmAppBar/>
        </div>
        <Container fluid className="filmDetailsBody">
            <Container fluid className="filmDetailsBody_header px-0">
              <Row style={{width:"100%", margin:"0px", justifyContent:"center"}}>
                <Col lg={6} sx={12} style={{padding:"0px"}}>
                <img className="filmDetailsBody_image"
                src={movieImage ? `https://image.tmdb.org/t/p/w342/${movieImage}` : ""}
                alt={movieTitle}>
                </img >
              </Col>
              </Row>
            </Container>
            <Container fluid className="filmDetailsBody_title">{movieTitle}</Container>
            <Container fluid className="filmDetailsBody_description">
              <Row className="w-100">
                <Col className="description"  >
                  <Container className="description-companies">
                  <div style={{fontWeight:"bold", width:"100%"}}>Production Companies: </div>
                  <div>
                  {productionCompaniesOriginalArr?.map((productionCompObject,i)=> {
                    return (
                      <span key={i}>{`${productionCompObject?.name}, `}</span>
                    )
                  })}
                  </div>
                  </Container>
                  <Container className="description-genre" >
                   <div style={{fontWeight:"bold",width:"100%"}}>Genres: </div> 
                   <div>
                   {movieGenresOriginalArr?.map((genreObject,i)=> {
                    return (<span key={i}>{`${genreObject?.name}, `}</span>)
                   })}
                   </div>
                  </Container>
                  <Container className="description-cast" >
                  <div style={{fontWeight:"bold",width:"100%"}}>Casts: </div> 
                  <div>
                  {castOriginalArr?.slice(0,5)?.map((castObject,i)=>{
                    return (
                      <span key={i}>{`${castObject?.name}, `}</span>
                    )
                  })}
                  </div>
                  </Container>
                  <Container className="description-content">
                    <div style={{fontWeight:"bold",width:"100%"}}>Description: </div>
                    <div>{` ${movieOverview}`}</div>
                  </Container>
                </Col>
                
                <Col  className="episode-guide">
                    <Container className="episode-guide-title">Episode guide:</Container> 
                    <Container className="season-name">
                      <ul>
                        {videoOriginalArr?.slice(0,2)?.map((videoObject,i)=> {
                          return (
                            <div key={i}>
                            <Link 
                                  className="episode-name"  
                                  to={`videoplayer/${videoObject?.key}`}
                            // onClick={()=>{navigate(`videoplayer/${videoObject?.key}`)}}
                            >
                                {videoObject?.name}
                            </Link>
                            </div>
                          )
                        })}
                      </ul>
                    </Container>
                </Col>
                </Row>
            </Container>
        </Container>
    </div>
  )
}

export default FilmDetailsPage