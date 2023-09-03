import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { likeMovie, unlikeMovie } from "./../store/actions/moviesAction"



export function MovieItem({ title, id }) {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const likedMovies = useSelector((state) => state.movies.likedMovies)

    const handleLikeMovie = (movie) => {
        dispatch(likeMovie(movie));
    };

    const handleUnlikeMovie = (movie) => {
        dispatch(unlikeMovie(movie));
    };

    function showLike() {
        if(likedMovies.includes(id)){
            return <p onClick={() => handleUnlikeMovie(id)} >dislike</p>
        } 
        return <p onClick={() => handleLikeMovie(id)}>like</p>
        
    }

    return (
        <li>
            <p onClick={() => {navigate(`movie/${id}`)}}>{title}</p>            
            {showLike()}
        </li>
    )
}