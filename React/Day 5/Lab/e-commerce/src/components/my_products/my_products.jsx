import React from 'react';
import './my_products.css';
import { useSelector } from 'react-redux';


const CartItem = ({ img, description, price }) => (
  <div className="cart-item">
    <div className="description">
      <img src={img} alt={description} />
      <div>
        <p>{description}</p>
      </div>
    </div>
    <div className="quantity">
      <button className="quantity-button">+</button>
      <span>1</span>
      <button className="quantity-button">-</button>
    </div>
    <button className="remove-button">x</button>
    <div className="price">{price}</div>
  </div>
)

const MyCart = () => {
  const cart = useSelector((state) => state.cart)

  const total = cart.reduce((acc, item) => acc + parseFloat(item.price), 0)

  return (
    <div className="cart">
      {cart.map((item, index) => (
        <CartItem
          key={index}
          img = {item.img}
          description={item.title}
          price={item.price}
        />
      ))}
      <div className="total">
        <span>Total</span>
        <span>£{total.toFixed(2)}</span>
      </div>
    </div>
  )
}

export default MyCart
