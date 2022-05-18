import React, {useState} from 'react'
import axios from 'axios'

const Form = () => {
    // DECLARE STATE
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("0")
    const [description, setDescription] = useState("")

    // HANDLER FUNCTIONS
    const submitHandler = event => {
        event.preventDefault()
        // CREATE AN OBJECT WITH PRODUCT INFO
        const productObj = {
            title,
            price,
            description
        }
        // MAKE POST REQUEST TO EXPRESS SERVER WITH productObj
        // PUSH URL TO ROUTES
        axios.post("http://localhost:8000/api/products/new", productObj)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    
    return (
    <fieldset>
        <legend>FormComponent.jsx</legend>
        <form onSubmit={submitHandler}>
            <p>
                Title:
                <input type="title" onChange={(e) => setTitle(e.target.value)} />
            </p>
            <p>
                Price:
                <input type="price" onChange={(e) => setPrice(e.target.value)} />
            </p>
            <p>
                Description:
                <input type="description" onChange={(e) => setDescription(e.target.value)} />
            </p>
            <button>Create</button>
        </form>
    </fieldset>
    )
}

export default Form