// src/components/App/App.tsx
import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from '../src/components/MoviesList/MoviesList';
import { NewMovie } from '../src/components/NewMovie/NewMovie';
import moviesFromServer from '../src/api/movies.json';
import { Movie } from '../src/types/Movie';

export const App = () => {
  const [movies, setMovies] = useState<Movie[]>(moviesFromServer);

  const handleAddMovie = (newMovie: Movie) => {
    setMovies(currentMovies => [...currentMovies, newMovie]);
  };

  return (
    <div className="page">
      <div className="page-content">
        <MoviesList movies={movies} />
      </div>
      <div className="sidebar">
        <NewMovie onAdd={handleAddMovie} />
      </div>
    </div>
  );
};
