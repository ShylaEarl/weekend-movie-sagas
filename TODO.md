## set-up
- [x] create database `saga_movies_weekend` and run queries from database.sql to create and populate tables.
- [x] install dependancies by running `npm install`
    -- Note to self, material UI automatically installed
- [x] spin project up with `npm run server` and `npm run client` 
- [x] created MovieDetails & AddMovie components and imported them into App

## Home Page (App.js)
- [x] create click event on movie posters 
    - [x] routes to /details for each movie (capture movie id value to route)
- [x] create link to Add Movie Page w/ a button

## Details Page (MovieDetails)
- [x] Show all details of a specific movie 
    - [] including all of the genres of said movie (store data in redux)
    - [x] create a GET request for a specific movie using req.params and :id (see above in home page)
- [x] Details page should have a `Back to List` button routing to home page

## Add Movie Page (AddMovie)
- [x] add an input field for movie title
- [x] add an input field for movie poster image URL
- [x] add a textarea for movie description
- [x] add dropdown for genres 
    - [x] make dropdown dynamic by mapping through genres
- [x] add cancel button which routes to the home page ('/')
- [x] add save button 
- [x] save button adds movie to database (POST route at /api/movie)
    - [x] save button routes to Home page 
    - [x] Home page displays updated movie list including the newly added movie (useEffect in home page should re-render with new movie) 

## Index.js
- [x] add genre saga
- [x] add fetchMovieDetails saga
- [x] add movieDetails reducer
- [] add a way to get/return genres details with movie details

## Genre.router
- [x] add get route to return all DB genres to saga/redux
- [x] add sql query to JOIN movies and genres and return all genres to details page

## Movie.router
- [x] add get request for specific movie using req.params.id and sql query

## Additonal
- [x] TODO assignment 2 on sql queries and table JOINS
- [] if time, add server side validation to POST

## General Considerations
- [] Invest some time in styling it up!
    - [] Research cards for your movie posters on the list page
    - [] Research grids for your movie posters on the Movie List page
- [x] Commit your code frequently! You should have at 15+ commits on a project of this size. 
- [] Use branches to help break down your features.
- [] Comment your code.
- [] Update this README to include a description of the project in your own words.

## Stretch Goals - TBD