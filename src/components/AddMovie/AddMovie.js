import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function AddMovie() {

    //dispatch to genre saga returns all genres from DB 
    //and adds them to genre reducer
    useEffect(() => {
        dispatch({ type: 'FETCH_GENRES' });
    }, []);

    //functionality to route to a page
    const history = useHistory();

    //functionality to dispatch information to a saga or reducer
    const dispatch = useDispatch();

    //creates a redux store instance for genres reducer
    const genres = useSelector(store => store.genres);

    //sets state/captures input data from user
    const [title, setTitle] = useState('');
    const [poster, setPoster] = useState('');
    const [description, setDescription] = useState('');
    const [genre_id, setGenre_id] = useState('');

    //adds state data to an object and sends it to DB via POST  
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
                {
                    title: title,
                    poster: poster,
                    description: description,
                    genre_id: genre_id
                }
            ).then((response) => {
                console.log('back from POST', response)
                //routes to home page
                history.push('/');
            }).catch((error) => {
                console.log('in addMovie POST', error)
            });
        }
    }

    //routes to home page
    const goHome = () => {
        history.push('/');
    }

    return (
        <div className="movie-inputs">
            <input placeholder="Title"
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)} />
            <input placeholder="Poster Image URL"
                type="text"
                value={poster}
                onChange={(event) => setPoster(event.target.value)} />
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
            {/* generates genre options dynamically */}
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
