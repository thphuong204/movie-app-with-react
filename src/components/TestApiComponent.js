import { useContext, useEffect, useState } from "react"
import { apiV3Discover, apiV3GetMovieDetails } from "../apis/tmdb";
import { FilmContext } from "./../App";

export const TestApiComponent = () => {
    const { movieDetails, setMovieDetails, movieArrays, setMovieArrays } = useContext(FilmContext);
    return (
    <div className="textdetial" style={{ color: "red" }}>
        TestApiComponent
        <h1>{` ${movieDetails?.title} bi sao cho movieDetails`}</h1>
    </div>)
}