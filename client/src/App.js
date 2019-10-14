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
        <Route exact path="/" component={MovieList} />
        <Route path={`/movies/:id`} component={Movie} />
      </div>
    </div>
  );
};

export default App;
