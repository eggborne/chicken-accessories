
function CartWidget(props) {
  const CartWidgetStyle = {
    width: '100%',
    height: '4rem',
    backgroundColor: 'yellow',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '0.1rem solid #00000044',
    borderRadius: '0.5rem',
  }

  return (
    <div style={CartWidgetStyle}>
      <div>Cart</div>
    </div>
  );
}

export default CartWidget;
