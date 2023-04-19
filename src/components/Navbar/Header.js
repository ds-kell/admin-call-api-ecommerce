import Navbar from './Navbar';
// ...
import { Link } from 'react-router-dom';
import  './header.css'

const Header = () => {
  return (
    <header>
      <div className="nav-area">
        <Link to="/home" className="logo">
          Maid Sofyaaa
        </Link>
      </div>
    </header>
  );
};

export default Header;
