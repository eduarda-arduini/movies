import { LIKE_MOVIE, UNLIKE_MOVIE } from "../actions/moviesAction";

const initialState = {
    likedMovies: []
}


export const movies = (state=initialState, action) => {
    switch(action.type) {
        case LIKE_MOVIE:
            return {
                ...initialState,
                likedMovies: state.likedMovies.concat(action.payload)
            }
        case UNLIKE_MOVIE:
            return {
                ...initialState,
                likedMovies: state.likedMovies.filter(m => m != action.payload)
            }
        default:
            return state
    }

}