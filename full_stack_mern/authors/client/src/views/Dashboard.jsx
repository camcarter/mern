import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
    const [authors, setAuthors] =useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
        .then(res => setAuthors(res.data))
        .catch(err => console.log(err))
}, [])

const deleteHandler = (id) => {
    axios.delete("http://localhost:8000/api/authors/"+id)
    .then(res => console.log(res))
    .catch()
}

    return (
        <fieldset>
            <legend>Dashboard.jsx</legend>
            <Link to={"/"}>Add an author</Link>
            {
                authors.map((author) => {
                    return(
                        <div>
                        <p>{author.name}</p>
                        <Link to ={"/" + author._id}>
                            <button class="btn btn-primary">Edit</button>
                        </Link>
                        <button onClick={(e) => deleteHandler(author._id)} class="btn btn-danger">Delete</button>
                        </div>
                    )
                })
            }
        </fieldset>
    )
}

export default Dashboard