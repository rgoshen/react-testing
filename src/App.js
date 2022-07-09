import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MoviesGrid from './components/MoviesGrid';
import MovieDetail from './components/MovieDetail';
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
