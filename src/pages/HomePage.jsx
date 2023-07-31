import { Link } from "react-router-dom";
import "./HomePage.css"

function HomePage() {
    return (
        <>
            <h1>LAB | React IronBeers</h1>
            <div className="category">
                <Link className="links" to="/beers">
                    <img src="/src/assets/beers.png" alt="beers" />
                    <h2>All Beers</h2>
                </Link>
                <p>Check all the Ironbeers here !</p>
            </div>
            <div className="category">
                <Link className="links" to="/random-beer">
                    <img src="/src/assets/random-beer.png" alt="random beer" />
                    <h2>Random Beer</h2>
                </Link>
                <p>Get a random beer !</p>
            </div>
            <div className="category">
                <Link className="links" to="/new-beer">
                    <img src="/src/assets/new-beer.png" alt="New beer" />
                    <h2>New Beer</h2>
                </Link>
                <p>Create a new beer !</p>
            </div>
        </>
    )
}

export default HomePage;
