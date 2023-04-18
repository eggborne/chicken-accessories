import React from "react";
import Modal from "./Modal";
import NewAccessoryForm from "./NewAccessoryForm";
import { findByLabelText } from "@testing-library/react";

function AccessoryList(props) {
  const accessoryListStyle = {
    width: '100%',
    minHeight: '4rem',
    backgroundColor: '#eee',
    display: 'flex',
    flexDirection: 'column',
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
    opacity: props.newFormVisible ? '1' : '0',
    transition: 'opacity 200ms ease',
  };

  const categories = [
    'hats', 'shirts', 'pants', 'anklets', 'eyewear'
  ];

  return (
    <React.Fragment>
      <div style={veilStyle}></div>
      <div style={accessoryListStyle}>
        <div className="accessory-list-header grid-list-row">
          <div>Item</div>
          <div>Manufacturer</div>
          <div>Description</div>
          <div>Category</div>
          <div>Price</div>
          <div>Quantity</div>
        </div>
        {props.accessoryList.map((accessory, index) => 
          <div className='accessory-list-item grid-list-row'>
            <div>{accessory.item}</div>
            <div>{accessory.manufacturer}</div>
            <div>{accessory.description}</div>
            <div>{accessory.category}</div>
            <div>{accessory.price}</div>
            <div>{accessory.quantity}</div>
          </div>
        )}
        <button onClick={props.handleClickNewAccessory}>Add a new accessory</button>
      </div>
      {<Modal 
        showing={props.newFormVisible}
        headline={"Add a new accessory"}
        bodyComponent={
          <NewAccessoryForm
            categories={categories}
            onClickAddAccessory={props.handleAddAccessory}
          />}
          // onClickAddAccessory={props.handleAddAccessory}
          onClickCancel={props.handleCancelAddAccessory}
      />}
    </React.Fragment>
  );
}

export default AccessoryList;