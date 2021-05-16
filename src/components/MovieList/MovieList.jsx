import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'

function MovieList() {

    const history = useHistory();

    const pushAddMovie = () => {
        history.push("/addmovie");
    }

    const pushMovieDetails = (id) => {
        console.log('clicked', id);
        dispatch({ type: 'FETCH_MOVIE_DETAILS', payload: id })
        history.push("/details");
    }

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    //renders all movies to DOM on page load and adds movies & genres to their Reducer
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
        dispatch({ type: 'FETCH_GENRES' });
    }, []);

    return (
        <main>
            <button onClick={pushAddMovie}>Add a Movie!</button>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img src={movie.poster}
                                alt={movie.title}
                                onClick={(event) => pushMovieDetails(movie.id)}
                            />
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;