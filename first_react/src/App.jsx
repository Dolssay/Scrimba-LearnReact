
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  return (
    <>
      <div className="header">
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="icon" alt="React logo" />
          <h2 className='header-title'>ReactFacts</h2>
        </a>
        
      </div>
      <h1>Fun facts about React</h1>
      <ul className="facts">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 200K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </>
  )
}

export default App
