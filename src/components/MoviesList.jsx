import './MoviesList.css';

const moviesList = [
  {
    adult: false,
    backdrop_path: '/wcKFYIiVDvRURrzglV9kGu7fpfY.jpg',
    genre_ids: [14, 28, 12],
    id: 453395,
    original_language: 'en',
    original_title: 'Doctor Strange in the Multiverse of Madness',
    overview:
      'Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.',
    popularity: 6647.226,
    poster_path: '/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg',
    release_date: '2022-05-04',
    title: 'Doctor Strange in the Multiverse of Madness',
    video: false,
    vote_average: 7.5,
    vote_count: 4067,
  },
  {
    adult: false,
    backdrop_path: '/qTkJ6kbTeSjqfHCFCmWnfWZJOtm.jpg',
    genre_ids: [10751, 16, 12, 35],
    id: 438148,
    original_language: 'en',
    original_title: 'Minions: The Rise of Gru',
    overview:
      'A fanboy of a supervillain supergroup known as the Vicious 6, Gru hatches a plan to become evil enough to join them, with the backup of his followers, the Minions.',
    popularity: 4115.543,
    poster_path: '/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg',
    release_date: '2022-06-29',
    title: 'Minions: The Rise of Gru',
    video: false,
    vote_average: 7.9,
    vote_count: 143,
  },
  {
    adult: false,
    backdrop_path: '/ta17TltHGdZ5PZz6oUD3N5BRurb.jpg',
    genre_ids: [53],
    id: 924482,
    original_language: 'en',
    original_title: 'The Ledge',
    overview:
      'A rock climbing adventure between two friends turns into a terrifying nightmare. After Kelly captures the murder of her best friend on camera, she becomes the next target of a tight-knit group of friends who will stop at nothing to destroy the evidence and anyone in their way. Desperate for her safety, she begins a treacherous climb up a mountain cliff and her survival instincts are put to the test when she becomes trapped with the killers just 20 feet away.',
    popularity: 2702.237,
    poster_path: '/dHKfsdNcEPw7YIWFPIhqiuWrSAb.jpg',
    release_date: '2022-02-18',
    title: 'The Ledge',
    video: false,
    vote_average: 6.3,
    vote_count: 35,
  },
];

export default function MoviesList() {
  return (
    <div className='movies-container'>
      <h1 className='movies-container-title'>Movies List</h1>
      <ul className='movies-container-list'>
        {moviesList.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}
