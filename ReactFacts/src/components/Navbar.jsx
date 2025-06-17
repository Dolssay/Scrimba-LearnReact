import '../styles/Navbar.css';
import reactLogo from '../assets/react.svg'

function Navbar() {
    return (
      <header>
        <nav className='navbar'>
            <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="icon" alt="React logo" />
            <span className='header-title'>ReactFacts</span>
            </a>
        </nav>
      </header>
    )
}

export default Navbar;