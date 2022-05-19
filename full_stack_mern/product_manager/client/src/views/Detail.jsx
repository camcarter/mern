import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams, Link, useNavigate } from 'react-router-dom'


const Detail = () => {

    const navigate = useNavigate()
    // STATE FOR HOLDING ONE PRODUCT
    const [product, setProduct] = useState()

    // GET PATH VARIABLE FROM REACT ROUTER
    const {product_id} = useParams()


    useEffect(() => {
        axios.get("http://localhost:8000/api/products/"+product_id)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
    }, [])


    const deleteHandler = (id) => {
        axios.delete("http://localhost:8000/api/products/"+id)
            .then(res => navigate("/"))
            .catch()
    }


    return (
        <fieldset>
            <legend>Detail.jsx</legend>
            {
                (product) ?
                <div>
                    <h1>Title: {product.title}</h1>
                    <h1>Price: {product.price}</h1>
                    <h1>Description: {product.description}</h1>
                    {/* <Link to={"/${product._id}/edit"}>
                        Edit
                    </Link> */}
                    <Link to={"/"+product._id+"/edit"}>
                        Edit
                    </Link>
                    <button onClick={(e) => deleteHandler(product._id)}>Delete</button>
                </div> : <h1>Something's broken...</h1>
            }
        </fieldset>
    )
}

export default Detail