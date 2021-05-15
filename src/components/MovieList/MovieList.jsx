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

    //TODO finish get request (check movie.router) for a specific movie using req.params and :id 
    //and return the details of the specific movie and route to details page
    const pushMovieDetails = (id) => {
        console.log('clicked', id);

        dispatch({type: 'FETCH_MOVIE_DETAILS', payload: id})
        history.push("/details"); //history.push("/details/${id}") or /:id or just /details
        
        // axios.get('/api/movies', (req, res))
        //     .then((response) => {
        //         console.log('movie detail GET request', response);
        //         history.push("/details/${id}") //or /:id or just /details
        //     })
        //     .catch((error) => {
        //         console.log('error in movie detail GET', error);
        //     })
    }

    // const getDetails = (id) => {
//     //function executed when a movie is clicked
//     //dispatches the movie ID to a reducer which stores the details on the clicked movie
//     dispatch({type: 'FETCH_MOVIE_ID', payload: id})
//     //pushes to details page
//     history.push('/Details')
// }


    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    //may not need dispatch to genre saga here...
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
        //dispatch({ type: 'FETCH_GENRES'});
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