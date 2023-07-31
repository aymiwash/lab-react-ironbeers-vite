import { Link } from "react-router-dom";
import "./NavBar.css"

function Navbar() {
    return (
        <nav>
            <Link to="/">
                <img src="src/assets/home-icon.png" alt="home icon" className="home-icon" />
            </Link>
        </nav>
    )
}

export default Navbar;
