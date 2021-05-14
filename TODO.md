## set-up
- [x] create database `saga_movies_weekend` and run queries from database.sql to create and populate tables.
- [x] install dependancies by running `npm install`
    -- Note to self, material UI automatically installed
- [x] spin project up with `npm run server` and `npm run client` 

- [x] created MovieDetails & AddMovie components and imported them into App

## Home Page (App.js)
- [] create click event on movie posters 
    - [] route to /details for each movie (capture movie id value to route)
- [] create link to Add Movie Page

## Details Page (MovieDetails)
- [] Show all details of a specific movie including all of the genres (store data in redux)
    - [] create a GET request for a specific movie using req.params and :id
- [] Details page should have a `Back to List` button routing to home page

## Add Movie Page (AddMovie)
- [] add an input field for movie title
- [] add an input field for movie poster image URL
- [] add a textarea for movie description
- [] add dropdown for genres
- [] add cancel button which routes to the home page (App, '/')
- [] add save button that adds movie to database (POST route at /api/movie)
    - [] save button routes to Home page which displays updated movie list including the newly added movie 

## General Considerations
- [ ] Invest some time in styling it up!
    - [ ] Research cards for your movie posters on the list page
    - [ ] Research grids for your movie posters on the Movie List page
- [ ] Commit your code frequently! You should have at 15+ commits on a project of this size. Use branches to help break down your features.
- [ ] Comment your code.
- [ ] Update this README to include a description of the project in your own words.

## Stretch Goals - TBD