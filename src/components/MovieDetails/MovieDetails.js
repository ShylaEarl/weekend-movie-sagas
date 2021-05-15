//import MovieList from "../MovieList/MovieList";
import { useHistory } from 'react-router-dom';


function MovieDetails(){
    
    // map through an array? or just show one object via id?

    //advances to the next page
    const history = useHistory();

    //back to list button routes to home page
    const goHome = () => {
        history.push("/");
    }

    return(
        <div >
            <p>This is where the details for a specific movie will show.</p>
            {/* key={movies.id}
            {movies.title}
            {movies.poster}
            {movies.description}
            Do I need to map through genre list and look for matches?
            {movies.genre? .name? other from DB? id?} */}
            <button onClick={goHome}>Back to List</button>
        </div>
    )
}

export default MovieDetails;

// - [] Show all details of a specific movie including all of the genres (store data in redux)
//     - [] create a GET request for a specific movie using req.params and :id