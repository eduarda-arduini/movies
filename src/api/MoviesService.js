import axios from 'axios'
const API_KEY = 'a844916041a3793eb1cda5f2cdc2179e'
const BASE_URL = 'https://api.themoviedb.org/3/'
const withBaseUrl = path => `${BASE_URL}${path}?api_key=${API_KEY}`


export class MoviesService {
    static getMovies() {
        return axios(withBaseUrl('movie/popular'))
    }

    static getMovieById(id) {
        return axios(withBaseUrl(`movie/${id}`))
    }

}