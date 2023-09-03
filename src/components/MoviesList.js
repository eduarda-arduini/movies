import { MovieItem } from "./MovieItem";

export function MoviesList({movies}) {

    return (
        <section>
            <ul>
                {movies.map(m => <MovieItem title={m.title} id={m.id}/>)}
            </ul>
        </section>
    )
}