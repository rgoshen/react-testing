import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  BASE_URL,
  API_KEY,
  POSTER_SIZE,
  BACKDROP_SIZE,
  BASE_IMAGE_URL,
} from '../../utilities/appConstants';
import formatDate from '../../utilities/formatDate';
import './MovieDetail.css';

export default function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [cast, setCast] = useState([]);

  const getMovie = async () => {
    try {
      const res = await fetch(BASE_URL + `movie/${id}` + API_KEY);
      const newMovie = await res.json();
      setMovie(newMovie);
    } catch (error) {
      console.error(error);
    }
  };

  const getCast = async () => {
    try {
      const res = await fetch(BASE_URL + `movie/${id}/credits` + API_KEY);
      const credits = await res.json();
      setCast(credits.cast.slice(0, 4));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovie();
    getCast();
    window.scrollTo(0, 0);
  }, [id]);

  if (!movie.title) return null;

  return (
    <div className='movie-detail'>
      <img
        src={BASE_IMAGE_URL + BACKDROP_SIZE + movie.backdrop_path}
        alt={movie.title + ' Backdrop'}
        className='movie-detail-backdrop'
      />
      <div className='movie-detail-details'>
        <img
          src={BASE_IMAGE_URL + POSTER_SIZE + movie.poster_path}
          alt={movie.title + ' Poster'}
          className='movie-detail-poster'
        />
        <div className='movie-detail-info'>
          <h1 className='movie-detail-info-title'>{movie.title}</h1>
          <p className='movie-detail-info-desc'>{movie.overview}</p>
          <p className='movie-detail-info-genres-list'>
            {movie.genres.map((genre) => (
              <span key={genre.id}>{genre.name} * </span>
            ))}
            <span>
              {formatDate(movie.release_date) + ' * ' + movie.runtime + ' mins'}
            </span>
          </p>
          <p className='movie-detail-info-cast'>
            {cast.map((member, index) =>
              index !== cast.length - 1 ? (
                <span key={member.credit_id}>{member.name + ', '}</span>
              ) : (
                <span key={member.credit_id}>{member.name}</span>
              )
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
