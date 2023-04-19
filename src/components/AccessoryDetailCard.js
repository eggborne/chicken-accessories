import React from "react";

function AccessoryDetailCard(props) {
  const accessoryDetailCardStyle = {
    width: '100%',
    minHeight: '4rem',
    backgroundColor: '#eee',
    display: 'flex',
    flexDirection: 'column',
    border: '0.1rem solid #00000044',
    borderRadius: '0.5rem',
    padding: '1rem',
  };

  const buttonAreaStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: '1rem',
  };

  function handleBuyItem(id) {
    props.onClickBuy(id)
  }

  return (
    <React.Fragment>
      <div style={accessoryDetailCardStyle}>
        <div>{props.item.item}</div>
        <div>{props.item.manufacturer}</div>
        <div>{props.item.description}</div>
        <div>{props.item.category}</div>
        <div>{props.item.price}</div>
        <div>{props.item.quantity}</div>
        <div style={buttonAreaStyle}>
          <button onClick={props.onClickGoBack}>Go back</button>
          <button className='green' onClick={() => handleBuyItem(props.item.id)}>Buy</button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AccessoryDetailCard;