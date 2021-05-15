import React from 'react'; // { useEffect } ??
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function MovieDetails(){
    
    // map through an array? or just show one object via id?
    //movie detail reducer to hold movie details based on id?
    const movieDetails = useSelector(store => store.movieDetails);

    //advances to the next page
    const history = useHistory();

    const dispatch = useDispatch();

    //back to list button routes to home page
    const goHome = () => {
        dispatch({type: 'CLEAR_MOVIE_DETAILS', payload: []});
        history.push("/");
    }

    return(
        <>
            <p>This is where the details for a specific movie will show.</p>
            {movieDetails.map(movieDetails => {
                return (<div key={movieDetails.id} >
                    <h3>{movieDetails.title}</h3>
                    <img src={movieDetails.poster} 
                        alt={movieDetails.title}
                    />
                    {movieDetails.description}
                    {movieDetails.genre}
                </div>)
            })}

            <button onClick={goHome}>Back to List</button>
        </>
    )
}

export default MovieDetails;

{/* Do I need to map through genre list and look for matches?
{movies.genre_id? This would return a number. We want a name .name? other from DB? id?} */}

// - [] Show all details of a specific movie 
// - [] including all of the genres (store data in redux)


