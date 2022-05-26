import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate, Link } from "react-router-dom";

const Detail = () => {

    const navigate = useNavigate()

    const [name, setName] = useState("")

    const [errors, setErrors] = useState([]);

    const {author_id} = useParams()

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/'+author_id)
            .then(res => {
                setName(res.data.name);
            })
            .catch(err => console.log(err))
    }, []);

    const updateHandler = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/authors/'+author_id, {
            name
        })
            .then(res => navigate('/'))
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
        <legend>Detail.jsx</legend>
        <h1>Favorite authors</h1>
        <Link to={'/'}>Home</Link>
        <p>Edit this author</p>
        <form onSubmit={updateHandler}>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" onChange={(e) => setName(e.target.value)} value={name}/>
            <button>Submit</button>
            <Link to={'/'}><button>Cancel</button></Link>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
        </form>
    </fieldset>
    )
}

export default Detail