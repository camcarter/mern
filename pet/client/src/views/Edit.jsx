import axios from "axios"
import React, {useEffect, useState} from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

const Edit = () => {

    const navigate = useNavigate()

    const {pet_id} = useParams()


    const [name, setName] = useState()
    const [petType, setPetType] = useState()
    const [petDescription, setPetDescription] = useState()
    const [skillOne, setSkillOne] = useState()
    const [skillTwo, setSkillTwo] = useState()
    const [skillThree, setSkillThree] = useState()
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/pets/"+pet_id)
            .then(res => {
                setName(res.data.name)
                setPetType(res.data.petType)
                setPetDescription(res.data.petDescription)
                setSkillOne(res.data.skillOne)
                setSkillTwo(res.data.skillTwo)
                setSkillThree(res.data.skillThree)
            })
            .catch(err => console.log(err))
    }, [])

    const updateHandler = (event) => {
        event.preventDefault()
                // CREATE AN OBJECT WITH PET INFO
                const petObj = {
                    name,
                    petType,
                    petDescription,
                    skillOne,
                    skillTwo,
                    skillThree
                }
        //  MAKE PUT REQUEST TO EXPRESS WITH petOBJ
        axios.put("http://localhost:8000/api/pets/"+pet_id, petObj)
                .then(res => navigate("/dashboard"))
                .catch(err => console.log(err))
    }

    return (
        <fieldset>
        <legend>Edit.jsx</legend>
        <Link to={"/dashboard"}>back to home</Link>
        <form onSubmit={updateHandler}>
            <h1>Pet Shelter</h1>
            <p>
                Pet Name:
                <input type="name" onChange={(e) => setName(e.target.value)} value={name} />
            </p>
            <p>
                Pet Type:
                <input type="petType" onChange={(e) => setPetType(e.target.value)} value={petType} />
            </p>
            <p>
                Pet Description:
                <input type="petDescription" onChange={(e) => setPetDescription(e.target.value)} value={petDescription} />
            </p>
            <p>
                Skill 1:
                <input type="skillOne" onChange={(e) => setSkillOne(e.target.value)} value={skillOne} />
            </p>
            <p>
                Skill 2:
                <input type="skillTwo" onChange={(e) => setSkillTwo(e.target.value)} value={skillTwo} />
            </p>
            <p>
                Skill 3:
                <input type="skillThree" onChange={(e) => setSkillThree(e.target.value)} value={skillThree} />
            </p>
            <button class="btn btn-primary">Edit Pet</button>
        </form>
        </fieldset>
    )
}

export default Edit