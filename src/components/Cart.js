import React from 'react';
import CartItem from './CartItem';

function Cart(props) {
  const cartStyle = {
    backgroundColor: '#ccc',
    borderRadius: '0.5rem',
    
  };
  return (
    <React.Fragment>
      <div style={cartStyle}>
        <h2>Shopping Cart</h2>
        {props.cart.map(item =>
          <CartItem item={item} />
        )}
      </div>
    </React.Fragment>
  );
}

export default Cart;
