import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from './pages/HomePage';
import FilmByGenresPage from './pages/FilmByGenresPage';
import VideoPlayerPage from './pages/VideoPlayerPage';
import FilmDetailsPage from './pages/FilmDetailsPage';
import SearchPage from './pages/SearchPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="" element={<HomePage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/genres" element={<FilmByGenresPage />} />
                <Route path="/search/:searchText" element={<SearchPage />} />
                <Route path="/details/:movieId" element={<FilmDetailsPage />} />
                <Route path="/details/:movieId/videoplayer/:videoId" element={<VideoPlayerPage />} />
            </Route>
        </Routes>
    </BrowserRouter>
    </>
);


