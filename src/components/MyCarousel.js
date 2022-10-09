import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import FilmThumbnail from "./FilmThumbnail";

export const MyCarousel = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const key = "791155";
    const movieObject = {
        "adult": false,
        "backdrop_path": "/aIkG2V4UXrfkxMdJZmq30xO0QQr.jpg",
        "genre_ids": "[878, 12, 28]",
        "id": 791155,
        "original_language": "en",
        "original_title": "Secret Headquarters",
        "overview": "While hanging out after school, Charlie and his friends discover the headquarters of the world’s most powerful superhero hidden beneath his home. When villains attack, they must team up to defend the headquarters and save the world.",
        "popularity": 1231.551,
        "poster_path": "/8PsHogUfvjWPGdWAI5uslDhHDx7.jpg",
        "release_date": "2022-08-12",
        "title": "Secret Headquarters",
        "video": false,
        "vote_average": 7,
        "vote_count": 77
    }

    return <Carousel responsive={responsive}>
        <div><img src="https://picsum.photos/401" /></div>
        <div><img src="https://picsum.photos/402" /></div>
        <div><img src="https://picsum.photos/403" /></div>
        <div><img src="https://picsum.photos/404" /></div>
        <div><FilmThumbnail key={key} movieObject={movieObject} /></div>
        <div><FilmThumbnail key={key} movieObject={movieObject} /></div>
        <div><FilmThumbnail key={key} movieObject={movieObject} /></div>
    </Carousel>;
}
