import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {

    const [pets, setPets] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/pets")
            .then(res => setPets(res.data))
            .catch(err => console.log(err))
}, [])

    return (
        <fieldset>
        <legend>Dashboard.jsx</legend>
        <h1>Pet Shelter</h1>
        <Link to={"/"}>add a pet to the shelter</Link>
        {
                pets.map((pet) => {
                    return(
                        <div>
                        <p>Name: {pet.name}</p>
                        <p>Pet Type: {pet.petType}</p>
                        Actions: <Link to ={"/" + pet._id}>details</Link> | 
                        <Link to ={"/edit/" + pet._id}>edit</Link>
                        </div>
                    )
                })
            }
        </fieldset>
    )
}

export default Dashboard