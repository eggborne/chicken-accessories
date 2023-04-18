
function NewAccessoryModal(props) {
  const NewAccessoryModalStyle = {
    position: 'fixed',
    left: '50%',
    top: '50%',
    translate: '-50% -50%',
    width: '20rem',
    height: '30rem',
    backgroundColor: '#333',
    color: '#aaa',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    border: '0.1rem solid #00000044',
    borderRadius: '0.5rem',
    opacity: props.showing ? '1' : '0',
    scale: props.showing ? '1' : '0.925',
    transition: 'opacity 200ms ease, scale 200ms ease',
  }

  return (
    <div style={NewAccessoryModalStyle}>
      <div>new accessory form</div>
      <button onClick={props.onClickCancel}>Cancel</button>
      
    </div>
  );
}

export default NewAccessoryModal;
