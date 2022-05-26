import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const EditForm = () => {

    const navigate = useNavigate()
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("0")
    const [description, setDescription] = useState("")


    // GET PATH VARIABLE FROM REACT ROUTER
    const {product_id} = useParams()


    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + product_id)
            .then(res => {
                // const {title, price, description} = res.data
                setTitle(res.data.title)
                setPrice(res.data.price)
                setDescription(res.data.description)
            })
            .catch(err => console.log(err))
    },[])


    const updateHandler = (event) => {
        event.preventDefault()
                // CREATE AN OBJECT WITH PRODUCT INFO
                const productObj = {
                    title,
                    price,
                    description
                }
        //  MAKE PUT REQUEST TO EXPRESS WITH productOBJ
        axios.put("http://localhost:8000/api/products/"+product_id, productObj)
                .then(res => navigate("/"))
                .catch(err => console.log(err))
    }


    return (
        <fieldset>
            <legend>EditForm.jsx</legend>
            <form onSubmit={updateHandler}>
            <h2>Edit Product</h2>
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
            <button>Update</button>
        </form>
        </fieldset>
    )
}

export default EditForm