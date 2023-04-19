
import React from 'react';

function CartItem(props) {
  const cartItemStyle = {
    backgroundColor: '#ddd',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '0.5rem',
    width: '100%',
    padding: '0 1rem',
  };

  return (
    <div style={cartItemStyle}>
      <div>{props.item.item}</div>
      <div>{props.item.id}</div>
      <div>${props.item.price}.00</div>
    </div>
  );
}

export default CartItem;
