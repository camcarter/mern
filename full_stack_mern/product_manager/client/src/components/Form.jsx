import React, {useState} from 'react'
import axios from 'axios'

const Form = (props) => {

    // DECLARE STATE
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("0")
    const [description, setDescription] = useState("")


    // DESTRUCTURE
    const {refresh} = props


    // HANDLER FUNCTIONS
    const createHandler = event => {
        event.preventDefault()
        // CREATE AN OBJECT WITH PRODUCT INFO
        const productObj = {
            title,
            price,
            description
        }


        // MAKE POST REQUEST TO EXPRESS SERVER WITH productObj
        // PUSH URL TO ROUTES
        // RESETS FORM DATA TO BLANK
        axios.post("http://localhost:8000/api/products/new", productObj)
            .then(res => {
                refresh()
                setTitle("")
                setPrice(0)
                setDescription("")
            })
            .catch(err => console.log(err))
    }


    return (
    <fieldset>
        <legend>FormComponent.jsx</legend>
        <form onSubmit={createHandler}>
            <h2>Product Manager</h2>
            <p>
                Title:
                <input type="title" onChange={(e) => setTitle(e.target.value)} value={title} />
            </p>
            <p>
                Price:
                <input type="price" onChange={(e) => setPrice(e.target.value)} value={price} />
            </p>
            <p>
                Description:
                <input type="description" onChange={(e) => setDescription(e.target.value)} value={description} />
            </p>
            <button>Create</button>
        </form>
    </fieldset>
    )
}

export default Form