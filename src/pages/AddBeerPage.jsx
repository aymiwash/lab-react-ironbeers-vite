import { useEffect, useState } from "react";
import "./AddBeerPage.css"
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddBeerPage({ baseURL }) {
    const [name, setName] = useState("")
    const [tagline, setTagline] = useState("")
    const [description, setDescription] = useState("")
    const [first_brewed, setBrewed] = useState("")
    const [brewers_tips, setBrewerTip] = useState("")
    const [attenuation_level, setAttenuation] = useState(0)
    const [contributed_by, setContributedBy] = useState("")

    const [newBeerId, setNewBeerId] = useState("");

    const navigate = useNavigate()
    const fetchNewBeer = async (beerName) => {
        try {
            const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${beerName}`)
            if (response.status === 200) {
                setNewBeerId(response.data[0]._id)
            }
        } catch (error) {
            console.error(error)
        }

    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const response = await fetch(`${baseURL}/new`, {
                method: `POST`,
                headers: {
                    'Content-Type': 'application/json'
                }, body: JSON.stringify({ name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by })
            })
            if (response.status === 200) {
                console.log("beer successfully created")
                await fetchNewBeer(name)
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        if (newBeerId) {
            navigate(`/beers/${newBeerId}`)
        }
    }, [newBeerId])

    return (
        <form onSubmit={handleSubmit} className="new_beer_form">
            <label> <p>Name</p>
                <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} />
            </label>
            <label><p>Tagline</p>
                <input type="text" name="tagline" value={tagline} onChange={e => setTagline(e.target.value)} />
            </label>
            <label><p>Description</p>
                <textarea name="description" value={description} onChange={e => setDescription(e.target.value)}>Your description here...</textarea>
            </label>
            <label><p>First Brewed</p>
                <input type="text" name="first_brewed" value={first_brewed} onChange={e => setBrewed(e.target.value)} />
            </label>
            <label> <p>Brewer's Tips</p>
                <input type="text" name="brewers_tips" value={brewers_tips} onChange={e => setBrewerTip(e.target.value)} />
            </label>
            <label> <p>Attenuation Level</p>
                <input type="number" name="attenuation_level" value={attenuation_level} onChange={e => setAttenuation(e.target.value)} />
            </label>
            <label><p>Contributed By</p>
                <input type="text" name="contributed_by" value={contributed_by} onChange={e => setContributedBy(e.target.value)} />
            </label>
            <button className="add_button" type="submit">ADD NEW</button>
        </form>
    )
}

export default AddBeerPage;
