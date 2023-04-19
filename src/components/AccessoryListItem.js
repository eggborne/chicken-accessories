
import React from 'react';

function AccessoryListItem(props) {
  const containerStyle = {
    backgroundColor: '#ddd',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '2rem',
  };

  const listHeaderStyle = {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '10rem 0.75fr 1fr 6rem 4rem 5rem',
    justifyItems: 'flex-start',
    fontWeight: 'bold',
  };

  const accessoryListItemStyle = {
    position: 'relative',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '10rem 0.75fr 1fr 6rem 4rem 5rem',
    backgroundColor: '#eee',
  };

  const accessoryCellStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '0.5rem',
  };

  const nameStyle = {
    ...accessoryCellStyle,
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const buttonAreaStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: '1rem',
  };

  const uidStyle = {
    position: 'absolute',
    border: "0",
    bottom: '-50%',
    left: '0.5rem',
    opacity: '0.65',
    fontSize: '90%',
  }

  function handleSelectDetails(e) {
    props.onClickDetails(e.target.id)
  }

  return (
    <div style={containerStyle}>
      <div style={listHeaderStyle} className="accessory-list-header grid-list-row">
        {props.labels.map(cat =>
          cat !== 'id' && <div>{cat[0].toUpperCase() + cat.slice(1)}</div>
        )}
      </div>
      <div style={accessoryListItemStyle} className='accessory-list-item'>
        {Object.values(props.specs).map((spec, s, arr) =>
          (s < arr.length - 1) && <div style={s ? accessoryCellStyle : nameStyle}>{spec}</div>
        )}
        <div style={uidStyle}>{props.specs.id}</div>
        {/* <div style={nameStyle}>{props.item}</div>
        <div style={accessoryCellStyle}>{props.manufacturer}</div>
        <div style={accessoryCellStyle}>{props.description}</div>
        <div style={accessoryCellStyle}>{props.category}</div>
        <div style={accessoryCellStyle}>{props.price}</div>
        <div style={accessoryCellStyle}>{props.quantity}</div> */}
      </div>
      <div style={buttonAreaStyle}>
        <button id={props.specs.id} onClick={handleSelectDetails} className='details'>See Details</button>
      </div>
    </div>
  );
}

export default AccessoryListItem;
