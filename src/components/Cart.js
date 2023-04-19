import React from 'react';
import CartWidget from './CartWidget';

function Cart(props) {
  const cartStyle = {
    backgroundColor: 'blue',
  };
  console.log('cart props', props);
  return (
    <React.Fragment>
      <div style={cartStyle}>
        {props.cart.map(item =>
          <div>{item}</div>
        )}
      </div>
    </React.Fragment>
  );
}

export default Cart;
