# PROJECT NAME

Weekend-Movie-Sagas

## Description

_Duration: Weekend Challenge_

What problem did you solve?
This application allows a user to create a list of movies they enjoy along with storing the details associated with each film. 

How did you solve it? 
This application allows a user to view a list of movie posters (on page load) and the details (title, genres, and description) of each film by clicking on the poster. It also allows the user to add a new movie and details to the list by adding movie information on the add movie page. The user can access the add movie page by clicking on the `Add a Movie!` button. They can return to the list page by clicking `Cancel` on the add movie page or `Back to List` on any detail page. 

### Prerequisites

- [Node.js] (https://nodejs.org/en/)
- [Express.js] (https://expressjs.com/)
- [Postgresql] (https://www.postgresql.org/)
- [React.js] (https://reactjs.org/)
- [Redux.js] (https://redux.js.org/)
- [Redux-saga.js] (https://redux-saga.js.org/)

## Installation

1. Create a database named `saga_movies_weekend`.
2. The queries in the `database.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries.
3. Start postgres if not running already by using brew services start postgresql in your terminal.
4. Open up your editor of choice and run an `npm install` to install all dependencies.
5. Run `npm run server` in your terminal.
6. Run `npm run client` in a second terminal.
7. The `npm run client` command will open up a new browser tab for you!

## Usage

1. A list of movies will appear when your browser opens.
2. Click on any movie poster to visit a detail page listing the title, genres, and description for that movie.
3. Click the `Back to List` button to return to the list of movies.
4. If you want to add a new movie to the list, click the `Add a Movie!` button.
5. Enter a movie title, poster image URL, and description for a movie of your choosing and add a genre from the dropdown list. 
6. If you are happy with your addition, click the `Save` button which will redirect you to the list page where your movie has been added to the list of films.
7. If you do not wish to complete your movie addition, click `Cancel` to return to the list page. 

## Built With

- [Javascript] (https://www.javascript.com/)
- [Node.js] (https://nodejs.org/en/)
- [Express.js] (https://expressjs.com/)
- [Postgresql] (https://www.postgresql.org/)
- [React.js] (https://reactjs.org/)
- [Redux.js] (https://redux.js.org/)
- [Redux-saga.js] (https://redux-saga.js.org/)

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) whom equipped and helped me to make this application a reality.

## Support
If you have suggestions or issues, please email me at [shyla.earl@gmail.com]

To see the fully functional site, please visit: [DEPLOYED VERSION OF APP](www.heroku.com)
