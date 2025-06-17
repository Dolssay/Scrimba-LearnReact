import reactLogo from './assets/react.svg'

function Header() {
  return (
    <header>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="icon" alt="React logo" />
        <h2 className='header-title'>ReactFacts</h2>
      </a>
      <nav>
        <ul className="nav-list">
          <li className="nav-list-item">Pricing</li>
          <li className="nav-list-item">About</li>
          <li className="nav-list-item">Contact</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header