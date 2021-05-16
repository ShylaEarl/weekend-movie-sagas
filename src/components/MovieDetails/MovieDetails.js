import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function MovieDetails(){
    
    //movie detail reducer holds movie details based on id
    const movieDetails = useSelector(store => store.movieDetails);

    //function that allows advance to the next page
    const history = useHistory();

    //dispatch action to reducer
    const dispatch = useDispatch();

    //back to list button routes to home page and clears movie details reducer
    const goHome = () => {
        dispatch({type: 'CLEAR_MOVIE_DETAILS', payload: []});
        history.push("/");
    }

    return(
        <>
            <p>This is where the details for a specific movie will show.</p>
            {movieDetails.map((movieDetails, i) => {
                return (<div key={i} >
                    <h3>{movieDetails.title}</h3>
                    <img src={movieDetails.poster} 
                        alt={movieDetails.title}
                    />
                    {movieDetails.description}
                    {movieDetails.genres}
                </div>)
            })}

            <button onClick={goHome}>Back to List</button>
        </>
    )
}

export default MovieDetails;


//TODO - ADD all genres to each movie

{/* Do I need to map through genre list and look for matches?
{movies.genre_id? This would return a number. We want a name .name? other from DB? id?} */}

// - [x] Show all details of a specific movie 
// - [] including all of the genres (store data in redux)


