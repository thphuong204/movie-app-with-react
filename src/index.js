import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from './pages/HomePage';
import FilmByGenresPage from './pages/FilmByGenresPage';
import LogInPage from './pages/LogInPage';
import VideoPlayerPage from './pages/VideoPlayerPage';
import FilmDetailsPage from './pages/FilmDetailsPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="" element={<LogInPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/genres" element={<FilmByGenresPage />} />
                <Route path="/details/:movieId" element={<FilmDetailsPage />} />
                <Route path="/videoplayer/:movieId" element={<VideoPlayerPage />} />
            </Route>
        </Routes>
    </BrowserRouter>
    </>
);


