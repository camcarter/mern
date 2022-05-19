import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Dashboard = (props) => {

    // STATE TO HOLD ALL PRODUCTS COMING FROM DATABASE
    const [allProducts, setAllProducts] = useState([])

    // DESTRUCTURE FROM PROPS
    const {refreshState} = props
    

    useEffect(() => {
    // MAKE A CALL TO EXPRESS TO GET ALL PRODUCTS
    axios.get("http://localhost:8000/api/products")
        .then(res => setAllProducts(res.data)) // INCOMING PRODUCTS ARE SET TO STATE
        .catch(err => console.log(err))
    }, [refreshState])


    return (
    <fieldset>
        <legend>DashboardComponent.jsx</legend>
        {
            allProducts.map((product, index) => {
                return(
                    <div key={index}>
                        <Link to={"/" + product._id}>
                        <h1>{product.title} - {product.description}</h1>
                        </Link>
                    </div>
                )
            })
        }
    </fieldset>
    )
}

export default Dashboard