import { useEffect, useState } from 'react';
import { API_KEY, BASE_URL } from '../utilities/appConstants';
import MovieCard from './MovieCard';
import './MoviesGrid.css';

export default function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  const [config, setConfig] = useState({});

  const getConfig = async () => {
    try {
      const res = await fetch(BASE_URL + 'configuration?api_key=' + API_KEY);
      const data = await res.json();
      setConfig(data);
    } catch (error) {
      console.error(error);
    }
  };

  const getMovies = async () => {
    try {
      const res = await fetch(
        BASE_URL + 'movie/now_playing?api_key=' + API_KEY
      );
      const data = await res.json();
      setMovies(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getConfig();
    getMovies();
  }, []);

  return (
    <>
      <h1 className='movies-grid-title'>Movies List</h1>
      <div className='movies-grid'>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} config={config} />
        ))}
      </div>
    </>
  );
}
