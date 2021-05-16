import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function MovieDetails() {

    //movie detail reducer holds movie details based on id
    const movieDetails = useSelector(store => store.movieDetails);

    //function that allows advance to the next page
    const history = useHistory();

    //dispatch action to reducer
    const dispatch = useDispatch();

    //back to list button routes to home page and clears movie details reducer
    const goHome = () => {
        dispatch({ type: 'CLEAR_MOVIE_DETAILS', payload: [] });
        history.push("/");
    }

    return (
        <>
            {movieDetails.map(movieDetails => {
                return (<div key={movieDetails.id} >
                    <h3>{movieDetails.title}</h3>
                    <img src={movieDetails.poster}
                        alt={movieDetails.title}
                    />
                    {movieDetails.genres.map(genre => {
                        return (<h4>{genre}</h4>)
                    })}
                    {movieDetails.description}
                </div>)
            })}
            <br />
            <button onClick={goHome}>Back to List</button>
        </>
    )
}

export default MovieDetails;
