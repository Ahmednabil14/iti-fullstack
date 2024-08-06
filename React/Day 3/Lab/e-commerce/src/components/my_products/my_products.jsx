import React from 'react';
import './my_products.css';

const CartItem = ({ description, productCode, price }) => (
  <div className="cart-item">
    <div className="description">
      <img src="path/to/your/image.jpg" alt={description} />
      <div>
        <p>{description}</p>
        <p>Product Code: {productCode}</p>
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
);

const MyCart = () => {
  const items = [
    { description: 'Headphones', productCode: 'MLSB', price: '£55' },
    { description: 'Headphones', productCode: 'MLSB', price: '£55' }
  ];

  const total = items.reduce((acc, item) => acc + parseFloat(item.price.slice(1)), 0);

  return (
    <div className="cart">
      {items.map((item, index) => (
        <CartItem
          key={index}
          description={item.description}
          productCode={item.productCode}
          price={item.price}
        />
      ))}
      <div className="total">
        <span>Total</span>
        <span>£{total.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default MyCart;
