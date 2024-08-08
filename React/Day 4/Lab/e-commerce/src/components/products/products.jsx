import axios from "axios"
import Product from "../product/product"
import { useEffect, useState} from "react"
import { useParams } from "react-router-dom"

export default function Products() {

    const [products, setProducts] = useState([])

    useEffect (() => {
        axios.get('https://dummyjson.com/products')
        .then((rsp) => {
            setProducts(rsp.data.products)
        })
    }, [])

    return (
        <>
            <div class="container-fluid mt-5 row row-cols-1 row-cols-md-3 g-5 pe-0">
                {products.map((product, index) => {
                    return (
                        <div key={product.id}>
                            <Product url={`/product/${product.id}`} title={product.title} img={product.thumbnail} rate={product.rating} price={product.price} stock={product.availabilityStatus} desc={product.description} />
                        </div>
                    )
                })}
            </div>
        </>
    )
}