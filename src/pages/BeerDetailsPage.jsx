import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./BeerDetailsPage.css"


function BeerDetailsPage({ baseURL }) {
    const params = useParams()
    const [currentBeer, setCurrentBeer] = useState()

    useEffect(() => {
        const fetchBeer = async () => {
            try {
                const response = await axios.get(`${baseURL}/${params.beerId}`)
                if (response.status === 200) {
                    console.log(response.data)
                    setCurrentBeer(response.data)
                }
            } catch (error) {
                console.error(error)
            }
        }
        fetchBeer()
    }, [])

    if (!currentBeer) {
        return <p>Loading...</p>
    }

    const { image_url, name, tagline, first_brewed, attenuation_level, description, contributed_by } = currentBeer

    return (
        <div className="one_beer_container">
            <img src={image_url} alt={name} />
            <div className="main_info_container">
                <div className="name_container">
                    <h2 className="name">{name}</h2>
                    <p className="tagline">{tagline}</p>
                </div>
                <div className="side_info">
                    <h2 className="attenuation">{attenuation_level}</h2>
                    <p className="brewed">{first_brewed}</p>
                </div>
            </div>
            <p>{description}</p>
            <p className="contributed">{contributed_by}</p>
        </div>
    )

}

export default BeerDetailsPage;
