import { POSTER_SIZE } from '../utilities/appConstants';
import MovieDetail from './MovieDetail';
import './MovieCard.css';

export default function MovieCard({ movie, config }) {
  return (
    <div className='movie-card'>
      {config.images.base_url && (
        <img
          src={config.images?.base_url + POSTER_SIZE + movie.poster_path}
          alt={movie.title + ' Poster'}
          className='movie-card-poster'
        />
      )}
    </div>
  );
}
