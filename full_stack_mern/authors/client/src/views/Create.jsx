import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"

const Create = () => {

    const [name, setName] = useState("")

    const [errors, setErrors] = useState([]);

    // IMPORT NAVIGATE FUNCTION FROM useNavigate HOOK
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        const authorObj = {
            name
        }
        axios.post("http://localhost:8000/api/authors/new", authorObj)
            .then(res => {
                navigate("/dashboard")
                setName("")
                navigate("/")
            })
            .catch(err=>{
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
        <h1>Favorite authors</h1>
        <Link to={'/dashboard'}><button>Home</button></Link>
        <p>Add a new author:</p>
        <form onSubmit={submitHandler}>
            <p>
                Name:
                <input type="text" name="name" onChange={(e) => setName(e.target.value)}/>
            </p>
            <Link to={'/dashboard'}><button>Submit</button></Link>
            <button>Cancel</button>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
        </form>
    </fieldset>
    )
}

export default Create