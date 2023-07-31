import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function RandomBeersPage({ baseURL }) {
    const [randomBeer, setRandomBeer] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        const fetchRandomBeer = async () => {
            try {
                const response = await axios.get(`${baseURL}/random`)
                if (response.status === 200) {
                    setRandomBeer(response.data)
                }
            } catch (error) {
                console.error(error)
            }
        }
        fetchRandomBeer()
    }, [])

    if (randomBeer) {
        navigate(`/beers/${randomBeer._id}`)
    }
}

export default RandomBeersPage;
