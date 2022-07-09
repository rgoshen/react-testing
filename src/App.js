import { Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import Home from './components/pages/Home';
import NowShowing from './components/pages/NowShowing';
import MovieDetail from './components/movies/MovieDetail';
import './App.css';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Routes>
        <Route path='now-showing' element={<NowShowing />} />
      </Routes>
      <Routes>
        <Route path='/:id' element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default App;
