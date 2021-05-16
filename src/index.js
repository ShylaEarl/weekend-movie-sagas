import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_GENRES', fetchAllGenres);
    yield takeEvery('FETCH_MOVIE_DETAILS', fetchMovieDetails);
}

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all movies:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });
    } catch {
        console.log('get all movies saga error');
    }
        
}

function* fetchAllGenres() {
    // get all genres from the DB
    try {
        const genres = yield axios.get('/api/genre');
        console.log('get all genres:', genres.data);
        yield put({ type: 'SET_GENRES', payload: genres.data });
    } catch {
        console.log('get all genres saga error');
    }
        
}

//look at saga's edit example...
//also need to return all genres? Should that happen here? Can that happen here?
function* fetchMovieDetails(action) {
    console.log('fetchMovieDetails saga', action.payload);
    
    //get movie details from DB based on id
    try{
        const movieDetails = yield axios.get(`/api/movie/details/${action.payload}`);
        console.log('get movie details', movieDetails.data);
        yield put({ type: 'SET_MOVIE_DETAILS', payload: movieDetails.data });
        
        // const genres = yield axios.get(`api/genre/${action.payload}`); // 'api/genre/name/${action.payload}'? would need to change in router too.
        // console.log('get movie genre details', genres.data);
        // yield put({ type: 'SET_GENRES', payload: genres.data });

    } catch {
        console.log('get all movie details saga error');
    }

}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

//Stores movies returned from DB
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

//Stores movie genres returned from DB
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

//Stores movie details returned from DB
const movieDetails = (state = [], action) => { 
    switch (action.type) {
        case 'SET_MOVIE_DETAILS':
            return action.payload;
        case 'CLEAR_MOVIE_DETAILS':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        movieDetails,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// function* fetchMovieID(action) {
//     // get movie by ID from the DB
//     //used for details
//     try {
//         const movies = yield axios.get('/api/movie/'+ action.payload);
//         const genres = yield axios.get('api/moviegenre/' + action.payload)
//         console.log('get specific movie:', movies.data);
//         console.log('genres', genres.data)
//         yield put({ type: 'SET_DETAILS', payload: movies.data });
//         yield put({ type: 'SET_GENRES', payload: genres.data })

//     } catch {
//         console.log('get all error');
//     }
        
// }