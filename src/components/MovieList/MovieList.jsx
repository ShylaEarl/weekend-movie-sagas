import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'

function MovieList() {

    //renders all movies to DOM on page load and 
    //adds movies & genres to their Reducer via saga
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
        dispatch({ type: 'FETCH_GENRES' });
    }, []);

    //functionality to route to a page
    const history = useHistory();
    
    //functionality to dispatch information to a saga or reducer
    const dispatch = useDispatch();

    //creates a redux store instance for movies reducer
    const movies = useSelector(store => store.movies);

    //route to add movie page
    const pushAddMovie = () => {
        history.push('/addmovie');
    }

    //route to detail page for a specific movie based on id
    //and dispatch action to saga to fetch details from reducer
    const pushMovieDetails = (id) => {
        console.log('clicked', id);
        dispatch({ type: 'FETCH_MOVIE_DETAILS', payload: id })
        history.push('/details');
    }

    return (
        <main>
            <button id="add-button" onClick={pushAddMovie}>Add a Movie!</button>
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