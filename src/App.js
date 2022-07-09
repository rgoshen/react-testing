import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MoviesGrid from './components/movies/MoviesGrid';
import MovieDetail from './components/movies/MovieDetail';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<MoviesGrid />} />
        </Routes>
        <Routes>
          <Route path='movie/:id' element={<MovieDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
