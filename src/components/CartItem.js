
import React from 'react';

function CartItem(props) {
  const cartItemStyle = {
    backgroundColor: '#ddd',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '2rem',
  };

  return (
    <div style={cartItemStyle}>
      <div>{props.item.item}</div>
      <div>{props.item.id}</div>
      <div>{props.item.price}</div>
    </div>
  );
}

export default CartItem;
