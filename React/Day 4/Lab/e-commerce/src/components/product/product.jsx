import { Link } from "react-router-dom/dist";
import SingleProduct from "../../pages/product/product";

export default function Product (props) {
    console.log(props.id)
    return (
        <div className={`col ${props.width}`}>
            <div className="card h-100">
            <Link to={props.url} >
                <img src={props.img} className="card-img-top w-75 h-75" alt="..."/>
            </Link>
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <h5 className="card-title">{props.title}</h5>
                    <h5 className="card-title">{props.price}$</h5>
                </div>
                <p className="card-text">{props.desc}</p>
                <p className="card-text">rate: {props.rate}</p>
                <p className="card-text">{props.stock}</p>
                <button className="btn btn-dark">Add to Cart</button>
            </div>
            </div>
        </div>
    )
}