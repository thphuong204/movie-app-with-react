import { useEffect, useState } from "react"
import { v3GetMovieDetails } from "../apis/tmdb";

export const TestApiComponent = () => {

    const [movieDetails, setMovieDetails] = useState(null);

    useEffect(async () => {
        const movie = await v3GetMovieDetails();
        setMovieDetails(movie);
    }, [])

    return <div style={{ color: "red" }}>
        TestApiComponent
        <h1>{movieDetails?.title}</h1>
    </div>
}