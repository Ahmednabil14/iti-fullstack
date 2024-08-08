import { useParams } from "react-router-dom";
import Product from "../../components/product/product"
import { useEffect, useState } from "react";
import axios from "axios";

function SingleProduct() {
  
  const { id } = useParams()
  const [product, setProduct] = useState({})
  console.log(product)

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
    .then((res) => {setProduct(res.data)})
    .catch((err)=>console.log(err))
  }, [])
    return (
      <Product width={"w-50"} title={product.title} img={product.thumbnail} rate={product.rating} price={product.price} stock={product.availabilityStatus} desc={product.description} />
    );
  }
  
  export default SingleProduct;
  