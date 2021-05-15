import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';

import MovieList from '../MovieList/MovieList';
import MovieDetails from '../MovieDetails/MovieDetails';
import AddMovie from '../AddMovie/AddMovie';

function App() {

  return (
    <div className="App">
      <header>
        <h1>The Movies Saga!</h1>
      </header>
      <Router>
        <Route path="/" exact>
          <MovieList />
        </Route>
        {/* should :id be ${id} */}
        <Route path="/details/:id" exact>
          <MovieDetails />
        </Route>
        <Route path="/addmovie" exact>
          <AddMovie />
        </Route>
      </Router>
    </div>
  );
}

export default App;
