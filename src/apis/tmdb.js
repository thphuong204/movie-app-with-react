import axios from "axios";

const API_V3_KEY = '68fd99303e96482d9eaff74537d24001';
const API_V3_BASE_URL = 'https://api.themoviedb.org/3'

const request = axios.create({
    baseURL: API_V3_BASE_URL,
    timeout: 1000,
    params: {
        api_key: API_V3_KEY,
        page: 2,
        append_to_response:"videos,images,credits"
    }
});

const requestAction = axios.create({
    baseURL: API_V3_BASE_URL,
    timeout: 2000,
    params: {
        api_key: API_V3_KEY,
        page: 2,
        with_genres: 28
    }
});

const requestDramma = axios.create({
    baseURL: API_V3_BASE_URL,
    timeout: 2000,
    params: {
        api_key: API_V3_KEY,
        page: 2,
        with_genres: 18
    }
});
const requestCommedy = axios.create({
    baseURL: API_V3_BASE_URL,
    timeout: 2000,
    params: {
        api_key: API_V3_KEY,
        page: 2,
        with_genres: 35
    }
});

export const apiV3Discover = async (page, pageSize, searchQuery) => {
    const response = await request.get('discover/movie');
    console.log(response.data);
    return response.data;
}

export const apiV3DiscoverAction = async (page, pageSize, searchQuery) => {
    const response = await requestAction.get('discover/movie');
    console.log("action list",response.data);
    return response.data;
}

export const apiV3DiscoverCommedy = async (page, pageSize, searchQuery) => {
    const response = await requestCommedy.get('discover/movie');
    console.log("commedy list",response.data);
    return response.data;
}

export const apiV3DiscoverDramma = async (page, pageSize, searchQuery) => {
    const response = await requestDramma.get('discover/movie');
    console.log("dramma list",response.data);
    return response.data;
}

export const apiV3GetMovieDetails = async (movieId) => {
    const response = await request.get('movie/760161');
    console.log("detail",response.data);
    return response.data;
}

