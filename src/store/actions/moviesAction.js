export const LIKE_MOVIE = 'LIKE_MOVIE'
export const UNLIKE_MOVIE = 'UNLIKE_MOVIE'
export const GET_LIKED_MOVIE = 'GET_LIKED_MOVIE'

export const likeMovie = (movie) => ({
    type: LIKE_MOVIE,
    payload: movie
})

export const unlikeMovie = (movie) => ({
    type: UNLIKE_MOVIE,
    payload: movie
})