import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function AddMovie() {

    //sets state/captures input data from user
    const [title, setTitle] = useState('');
    const [poster, setPoster] = useState('');
    const [description, setDescription] = useState('');
    const [genre, setGenre] = useState('');

    //May not need this. I think I'm just posting to the DB, not the reducer
    //on action call, sends payload (setState) to redux store reducer
    const dispatch = useDispatch();

    //advances to the next page
    const history = useHistory();

    //on click of save button, addMovie collects state data in an object 
    //and sends it to the DB via an axios POST route (check server, already written). 
    const addMovie = ({title, poster, description, genre}) => {
        console.log('add movie object. what variable to I log here to see data?', );
        //TODO - write axios POST request to send new movie to DB (check server, already written). 
        axios.post('/')
        //I don't think I need to dispatch to the reducer here... but I do need to send a movie object to the DB
        dispatch({ type: 'SET_MOVIES', payload: {title: title, poster: poster, description: description, genre: genre} });
        //clicking save button also pushes user to home/list page...
        history.push("/");
        //which re-renders all DB movies to DOM(including new one)
        // by useEffect dispatching an action to the fetch all movies saga
    }

    //cancel button routes to home page
    const goHome = () => {
        history.push("/");
    }

    return(
        <div>
            <p>This is where a user can add a new movie!</p>
            <input placeholder="Title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}/>
            <input placeholder="Poster Image URL"
                value={poster}
                onChange={(event) => setPoster(event.target.value)}/>
            <textarea placeholder="Description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                rows="4"
                cols="50"
                id="movie-description"
                name="description"
                form="userForm">
            </textarea>
            {/* TODO - change values to DB genre values either dynamically or hard code */}
            <select placeholder="Select A Genre" 
                value={genre}
                onChange={(event) => setGenre(event.target.value)}
                className="select-genre"> 
                <option value="adventure">Adventure</option> 
                <option value="cohort">Cohort</option>
                <option value="cartoon">Cartoon</option>
                <option value="nsfw">NSFW</option>
                <option value="meme">Meme</option>
            </select>
            <button onClick={goHome}>Cancel</button>
            <button onClick={addMovie}>Save</button>
        </div>
    )
}

export default AddMovie;

// - [x] add an input field for movie title
// - [x] add an input field for movie poster image URL
// - [x] add a textarea for movie description
// - [] add dropdown for genres
// - [x] add cancel button which routes to the home page (App, '/')
// - [x] add save button that adds movie to database (POST route at /api/movie)
//     - [x] save button routes to Home page which 
       // -[] Home page displays updated movie list including the newly added movie 

//Genre Options
//Adventure
//Animated
//Biographical
//Comedy
//Disaster
//Drama
//Epic
//Fantasy
//Musical
//Romantic
//Science Fiction
//Space-Opera
//Superhero