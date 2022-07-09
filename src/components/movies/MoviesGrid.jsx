import { useEffect, useState } from 'react';
import { API_KEY, BASE_URL } from '../../utilities/appConstants';
import MovieCard from './MovieCard';
import Filter from '../Filter';
import './MoviesGrid.css';

export default function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  const [config, setConfig] = useState({});
  const [filter, setFilter] = useState('');

  const getConfig = async () => {
    try {
      const res = await fetch(BASE_URL + 'configuration' + API_KEY);
      const data = await res.json();
      setConfig(data);
    } catch (error) {
      console.error(error);
    }
  };

  const getNowPlayingMovies = async () => {
    try {
      const res = await fetch(BASE_URL + 'movie/now_playing' + API_KEY);
      const data = await res.json();
      setMovies(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getConfig();
    getNowPlayingMovies();
  }, []);

  return (
    <>
      <Filter filter={filter} setFilter={setFilter} />
      <div className='movies-grid'>
        {movies
          .filter((movie) =>
            movie.title.toLowerCase().includes(filter.toLowerCase())
          )
          .map((movie) => (
            <MovieCard key={movie.id} movie={movie} config={config} />
          ))}
      </div>
    </>
  );
}
