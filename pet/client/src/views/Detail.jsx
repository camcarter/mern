import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'


const Detail = () => {

    const navigate = useNavigate()

    const [pet, setPet] = useState([])

    const {pet_id} = useParams()

    useEffect(() => {
        axios.get("http://localhost:8000/api/pets/"+pet_id)
            .then(res => setPet(res.data))
            .catch(err => console.log(err))
}, )

    const deleteHandler = (id) => {
        axios.delete("http://localhost:8000/api/pets/"+id)
        .then(res => navigate("/dashboard"))
        .catch(err => console.log(err))
    }

    return (
        <fieldset>
        <legend>Detail.jsx</legend>
        <Link to={"/dashboard"}>back to home</Link>
            <div>
            <h1>Pet Shelter</h1>
            <h3>Details about: {pet.name}</h3>
            <button class="btn btn-danger" onClick={(e) => deleteHandler(pet._id)}>Adopt {pet.name}</button>
            <p>Pet Type: {pet.petType}</p>
            <p>Description:{pet.petDescription}</p>
            <p>Skills:{pet.skillOne}</p>
            <p>{pet.skillTwo}</p>
            <p>{pet.skillThree}</p>
            </div>
        </fieldset>
    )
}

export default Detail