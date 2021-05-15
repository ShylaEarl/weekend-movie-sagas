import React, { useEffect } from 'react';
import { useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import axios from 'axios';

function MovieList() {

    const history = useHistory();

    const pushAddMovie = () => {
        history.push("/addmovie");
    }

    //TODO finish get request to server w a req.params id to return the 
    //details of the specific poster clicked on and route to details page
    const pushMovieDetails = (id) => {
        console.log('clicked', id);
        
        // axios.get('/api/movies', (req, res))
        //     .then((response) => {
        //         console.log('movie detail GET request', response);
        //         //history.push("/details/:id") or ${id}
        //     })
        //     .catch((error) => {
        //         console.log('error in movie detail GET', error);
        //     })
    }

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
        dispatch({ type: 'FETCH_GENRES'});
    }, []);

    return (
        <main>
            <button onClick={pushAddMovie}>Click here to Add a Movie!</button>
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