import { useContext} from "react"
import { FilmContext } from "./../App";

export const TestApiComponent = () => {
    const { movieDetails } = useContext(FilmContext);
    return (
    <div className="textdetial" style={{ color: "red" }}>
        TestApiComponent
        <h1>{` ${movieDetails?.title}`}</h1>
    </div>)
}