import React from 'react';
import CartItem from './CartItem';

function Cart(props) {
  const cartStyle = {
    backgroundColor: '#ccc',
    borderRadius: '1rem',
  };
  return (
    <React.Fragment>
      <div style={cartStyle}>
        <h2>Shopping Cart</h2>
        <ul>
          {props.cart.map(item =>
            <CartItem item={item} />
          )}
        </ul>
      </div>
    </React.Fragment>
  );
}

export default Cart;
