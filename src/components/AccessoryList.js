import React from "react";
import NewAccessoryModal from "./NewAccessoryModal";

function AccessoryList(props) {
  const accessoryListStyle = {
    width: '100%',
    height: '4rem',
    backgroundColor: '#eee',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '0.1rem solid #00000044',
    borderRadius: '0.5rem',
    padding: '1rem',
  };

  const veilStyle = {
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    backgroundColor: '#00000099',
    content: ' ',
    top: '0',
    left: '0',
    pointerEvents: props.newFormVisible ? 'all' : 'none',
    opacity: props.newFormVisible ? 1 : 0,
    transition: 'opacity 200ms ease',
  };

  return (
    <div className="accessory-list-container">
      <div style={veilStyle}></div>
      <div style={accessoryListStyle}>
        <div className="accessory-list-header">
          <div>Item</div>
          <div>Manufacturer</div>
          <div>Category</div>
          <div>Description</div>
          <div>Price</div>
          <div>Quantity</div>
        </div>
      </div>
      {<NewAccessoryModal showing={props.newFormVisible} onClickCancel={props.handleCancelAddAccessory} />}
      <button onClick={props.handleClickNewAccessory}>Add a new accessory</button>
    </div>
  );
}

export default AccessoryList;