const axios = require('axios');

API_V3_KEY = '68fd99303e96482d9eaff74537d24001';
API_V3_BASE_URL = 'https://api.themoviedb.org/3'

const request = axios.create({
    baseURL: API_V3_BASE_URL,
    timeout: 1000,
    params: {
        api_key: API_V3_KEY
    }
});

const discover = async (page, pageSize, searchQuery) => {
    console.log('discovering movie')
    const response = await request.get('discover/movie');
    console.log(response.data);
}

const movieDetails = async (movieId) => {
    console.log('getting movie details')
    const response = await request.get('movie/760161');
    console.log(response.data);
}

module.exports = discover;
module.exports = movieDetails;