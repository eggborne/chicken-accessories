
function Modal(props) {
  const modalStyle = {
    position: 'fixed',
    left: '50%',
    top: '50%',
    translate: '-50% -50%',
    width: '24rem',
    padding: '1rem',
    backgroundColor: '#333',
    color: '#aaa',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    border: '0.1rem solid #00000044',
    borderRadius: '0.5rem',
    boxShadow: '0 0 1rem 0.25rem #00000055',
    pointerEvents: props.showing ? 'all' : 'none',
    opacity: props.showing ? '1' : '0',
    scale: props.showing ? '1' : '0.925',
    transition: 'opacity 200ms ease, scale 200ms ease',
    zIndex: '2',
  }

  return (
    <div style={modalStyle}>
       <h2>{props.headline}</h2>
      {props.bodyComponent}
      <button onClick={props.onClickCancel}>Cancel</button>
    </div>
  );
}

export default Modal;
