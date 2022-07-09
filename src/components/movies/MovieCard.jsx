import { Link } from 'react-router-dom';
import { POSTER_SIZE } from '../../utilities/appConstants';
import './MovieCard.css';

export default function MovieCard({ movie, config }) {
  return (
    <div className='movie-card'>
      <Link to={`movie/${movie.id}`}>
        {config.images.base_url && (
          <img
            src={config.images?.base_url + POSTER_SIZE + movie.poster_path}
            alt={movie.title + ' Poster'}
            className='movie-card-poster'
          />
        )}
      </Link>
    </div>
  );
}
