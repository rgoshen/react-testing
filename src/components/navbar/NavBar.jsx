import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
  return (
    <nav className='nav'>
      <Link to='/' className='nav-brand'>
        <img src={process.env.PUBLIC_URL + 'movies-list-logo.png'} alt='logo' />
      </Link>
      <ul className='nav-bar'>
        <li className='nav-element active'>
          <Link to='now-showing'>Now Showing</Link>
        </li>
      </ul>
    </nav>
  );
}
