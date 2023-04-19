import React from "react";
import Modal from "./Modal";
import NewAccessoryForm from "./NewAccessoryForm";
import AccessoryListItem from "./AccessoryListItem";
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
    zIndex: '1',
  };

  const categories = [
    'hats', 'shirts', 'pants', 'anklets', 'eyewear', 'harnesses'
  ];

  const itemProps = Object.keys(props.accessoryList[0]);

  return (
    <React.Fragment>
      <div style={veilStyle}></div>
      <div style={accessoryListStyle}>
        {props.accessoryList.map((accessory, index) => 
          <AccessoryListItem 
            specs={{...accessory}}
            labels={itemProps}
            id={index}
            onClickDetails={props.handleClickDetails}
          />
        )}
        <button className='green wide' onClick={props.handleClickNewAccessory}>Add a new accessory</button>
      </div>
      {<Modal 
        showing={props.newFormVisible}
        headline={"Add a new accessory"}
        bodyComponent={
          <NewAccessoryForm
            categories={categories}
            onClickAddAccessory={props.handleAddAccessory}
          />}
          onClickCancel={props.handleCancelAddAccessory}
      />}
    </React.Fragment>
  );
}

export default AccessoryList;