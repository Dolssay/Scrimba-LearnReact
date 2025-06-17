import '../styles/Main.css';
import HalfReactIcon from '../assets/half-react-icon.png';

function Main() {
    return (
        <main className="main-content">
            <h1>Fun facts about React</h1>
            <ul className="facts">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 200K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    )
}

export default Main;