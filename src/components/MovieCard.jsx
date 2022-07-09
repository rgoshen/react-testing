import './MovieCard.css';

const POSTER_SIZE = 'original';

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
