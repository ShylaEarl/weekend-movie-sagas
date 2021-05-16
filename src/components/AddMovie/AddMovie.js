import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function AddMovie() {

    //calls genre saga to return all genres from DB
    useEffect(() => {
        dispatch({ type: 'FETCH_GENRES'});
    }, []);

    //redux store instance to access all genres
    const genres = useSelector(store => store.genres);

    //sets state/captures input data from user
    const [title, setTitle] = useState('');
    const [poster, setPoster] = useState('');
    const [description, setDescription] = useState('');
    const [genre_id, setGenre_id] = useState('');

    //May not need this. I think I'm just posting to the DB, not the reducer...
    //on action call, sends payload (setState) to redux store reducer
    const dispatch = useDispatch();

    //advances to the next page
    const history = useHistory();

    //on click of save button add state data to an object and send to DB via POST  
    const addMovie = () => { 
        //client side validation prevents missing data in DB (all DB columns are NOT NULL)
        if (title === '' || poster === '' || description === '' || genre_id === '') {
            swal({
                text: 'Please fill in all fields.',
                buttons: {
                    ok: true,
                }
            })
        } else {
            //sends new movie data to DB
            axios.post('/api/movie', 
                    {title: title,
                    poster: poster,
                    description: description,
                    genre_id: genre_id}
                ).then((response) =>{
                    console.log('back from POST', response)
                    //clicking save button also routes user to home/list page...
                    history.push('/');
                }).catch((error) => {
                    console.log('in addMovie POST', error)
                });
        }
    }

    //cancel button routes to home page
    const goHome = () => {
        history.push('/');
    }

    return(
        <div>
            <p>This is where a user can add a new movie!</p>
            <input placeholder="Title"
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}/>
            <input placeholder="Poster Image URL"
                type="text"
                value={poster}
                onChange={(event) => setPoster(event.target.value)}/>
            <textarea placeholder="Description"
                type="text"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                rows="4"
                cols="50"
                id="movie-description"
                name="description"
                form="userForm">
            </textarea>
            {/* generates genres dynamically TODO - double check on this w/ Karsten tomorrow */}
            <select placeholder="Choose a Genre" 
                    type="text"
                    value={genre_id}
                    onChange={(event) => setGenre_id(event.target.value)}
                    className="select-genre">
                        {genres.map((genre) => {
                            return (<option key={genre.id} value={genre.id}>{genre.name}</option>);
                        })}
            </select>
            <button onClick={goHome}>Cancel</button>
            <button onClick={addMovie}>Save</button>
        </div>
    )
}

export default AddMovie;

//Just in case... hardcoded dropdown genre options

{/* <select placeholder="Choose a Genre"
    value={genre_id}
    onChange={(event) => setGenre_id(event.target.value)}
    className="select-genre"> 
    <option value="default"></option>
    <option value="1">Adventure</option> 
    <option value="2">Animated</option>
    <option value="3">Biographical</option>
    <option value="4">Comedy</option>
    <option value="5">Disaster</option>
    <option value="6">Drama</option> 
    <option value="7">Epic</option>
    <option value="8">Fantasy</option>
    <option value="9">Musical</option>
    <option value="10">Romantic</option>
    <option value="11">Science Fiction</option>
    <option value="12">Space-Opera</option>
    <option value="13">Superhero</option>
</select> */}