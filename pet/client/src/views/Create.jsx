import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'


const Create = () => {

    const [name, setName] = useState()
    const [petType, setPetType] = useState()
    const [petDescription, setPetDescription] = useState()
    const [skillOne, setSkillOne] = useState()
    const [skillTwo, setSkillTwo] = useState()
    const [skillThree, setSkillThree] = useState()

    const [errors, setErrors] =useState([]);

    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault();
        const petObj = {
            name,
            petType,
            petDescription,
            skillOne,
            skillTwo,
            skillThree
        }
        axios.post("http://localhost:8000/api/pets/new", petObj)
            .then(res => navigate("/dashboard"))
            .catch(err => {
                console.log(err)
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
    }

    return (
        <fieldset>
        <legend>Create.jsx</legend>
        <h1>Pet Shelter</h1>
        <Link to={"/dashboard"}>Back to home</Link>
            <form onSubmit={submitHandler}>
                <p>
                    <h4>Name:</h4>
                    <input type="text" name="name" onChange={(e) => setName(e.target.value)} /> 
                </p>
                <p>
                    <h4>Pet Type:</h4>
                    <input type="text" name="petType" onChange={(e) => setPetType(e.target.value)} /> 
                </p>
                <p>
                    <h4>Pet Description:</h4>
                    <input type="text" name="petDescription" onChange={(e) => setPetDescription(e.target.value)} /> 
                </p>
                <h4>Optional Skills</h4>
                <p>
                    <h4>Skill 1:</h4>
                    <input type="text" name="skillOne" onChange={(e) => setSkillOne(e.target.value)} /> 
                </p>
                <p>
                    <h4>Skill 2:</h4>
                    <input type="text" name="skillTwo" onChange={(e) => setSkillTwo(e.target.value)} />
                </p>
                <p>
                    <h4>Skill 3:</h4>
                    <input type="text" name="skillThree" onChange={(e) => setSkillThree(e.target.value)} />
                </p>
                <button class="btn btn-primary">Add Pet</button>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            </form>
        </fieldset>
    )
}

export default Create