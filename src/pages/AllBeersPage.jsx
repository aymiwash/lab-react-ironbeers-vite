import axios from "axios";
import { useEffect, useState } from "react";
import "./AllBeersPage.css"
import { Link } from "react-router-dom";

function AllBeersPage({ baseURL }) {
    const [allBeers, setAllBeers] = useState()
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchAllBeers = async () => {
            try {
                const response = await axios(baseURL)
                if (response.status === 200) {
                    setAllBeers(response.data)
                }
            } catch (error) {
                console.error(error)
            }
        }
        fetchAllBeers()
    }, [])

    return (
        <div className="all_beers_container">
            <input className="search_bar" type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder="search for a beer..." />
            <ul>
                {allBeers ?
                    allBeers.filter(beer => {
                        if (beer.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return beer
                        }
                    }).map(oneBeer =>
                        <li key={oneBeer._id} className="one_beer">
                            <div className="image_container">
                                <Link to={`/beers/${oneBeer._id}`}>
                                    <img className="beer_img" src={oneBeer.image_url} alt="" />
                                </Link>
                            </div>
                            <div className="beer_description">
                                <Link to={`/beers/${oneBeer._id}`}>
                                    <h2 className="beer_name">{oneBeer.name}</h2>
                                </Link>
                                <p className="tagline">{oneBeer.tagline}</p>
                                <p className="creator">Created by {oneBeer.contributed_by}</p>
                            </div>
                        </li>
                    )
                    : <p>Loading...</p>}
            </ul>
        </div>
    )
}

export default AllBeersPage;
