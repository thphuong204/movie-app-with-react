import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import FilmByGenresPage from './pages/FilmByGenresPage';
import VideoPlayerPage from './pages/VideoPlayerPage';
import FilmDetailsPage from './pages/FilmDetailsPage';
import SearchPage from './pages/SearchPage';
import NotFoundPage from './pages/NotFoundPage';
import LogInPage from './pages/LogInPage';
import AuthRequire from './routes/AuthRequire';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="/login" element={<LogInPage />} />
                    <Route path="" element={
                        <AuthRequire>
                            <HomePage />
                        </AuthRequire>
                    } />
                    <Route path="/home" element={
                        <AuthRequire>
                            <HomePage />
                        </AuthRequire>
                    } />
                    <Route path="/discover/:pageId" element={
                        <AuthRequire>
                             <HomePage />
                        </AuthRequire>
                    } />
                    <Route path="/genres/:pageId" element={
                        <AuthRequire>
                            <FilmByGenresPage />
                        </AuthRequire>
                    } />
                    <Route path="/search/:searchText" element={
                        <AuthRequire>
                            <SearchPage />
                        </AuthRequire>
                    } />
                    <Route path="/details/:movieId" element={
                        <AuthRequire>
                            <FilmDetailsPage />
                        </AuthRequire>
                    } />
                    <Route path="/details/:movieId/videoplayer/:videoId" element={
                        <AuthRequire>
                            <VideoPlayerPage />
                        </AuthRequire>
                    } />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </>
);


