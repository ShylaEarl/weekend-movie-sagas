//import MovieList from "../MovieList/MovieList";


function MovieDetails(){
    
    // map through an array? or just show one object via id?

    return(
        <div key={movies.id}>
            <p>This is where the details for a specific movie will show.</p>
            {/* {movies.title}
            {movies.poster}
            {movies.description}
            Do I need to map through genre list and look for matches?
            {movies.genre? .name? other from DB? id?} */}
        </div>
    )
}

export default MovieDetails;

// - [] Show all details of a specific movie including all of the genres (store data in redux)
//     - [] create a GET request for a specific movie using req.params and :id
// - [] Details page should have a `Back to List` button routing to home page