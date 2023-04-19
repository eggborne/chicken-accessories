
function CartWidget(props) {
  const CartWidgetStyle = {
    width: '100%',
    height: 'min-content',
    backgroundColor: 'yellow',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    border: '0.1rem solid #00000044',
    borderRadius: '0.5rem',
    padding: '1rem',
    gap: '1rem',
  }

  return (
    <div style={CartWidgetStyle}>
      <div><span>{props.cart.length} item{props.cart.length === 1 ? '' : 's'} in </span>cart</div>
      <button className='green'>View Cart</button>
    </div>
  );
}

export default CartWidget;
