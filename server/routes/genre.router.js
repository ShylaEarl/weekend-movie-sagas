const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  
  //Add query to get all genres
  const query = `SELECT * FROM genres ORDER BY "id" ASC;`;
  pool.query(query)
    .then( result => {
      console.log('genre.router get query', result.rows);
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all genres', err);
      res.sendStatus(500)
    })

});

//TODO - add get request w query to return all ind. movie's genres ('/name/:id')?
// router.get('/:id', (req, res) => {

//   const query = `SELECT movies.title, ARRAY_AGG(genres.name) FROM movies
//     JOIN movies_genres ON movie_id = movies.id
//     JOIN genres ON genres.id = genre_id
//     GROUP BY movies.title;`;
//   pool.query(query, [req.params.id])
//     .then( result => {
//       console.log('genre.router get details genres', result.rows);
//       res.send(result.rows)
//     }).catch((err) => {
//       console.log(err)
//       res.sendStatus(500)
//     })

// });

module.exports = router;