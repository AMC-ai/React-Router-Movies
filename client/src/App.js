import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import Movie from './Movies/Movie';
import MovieList from './Movies/MovieList';




const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };


  return (
    <div>
      <SavedList list={savedList} />
      <div className="nav-links">
        {/* <Route exact path="/" component={}/> */}
        <Route exact path="/" render={(props) => <MovieList {...props} />} />
        <Route path={`/movies/:id`} render={(props) => <Movie {...props} />} />
      </div>
    </div>
  );

};

export default App;
