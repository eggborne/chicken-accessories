

function AccessoryList(props) {
  const AccessoryListStyle = {
    width: '100%',
    height: '4rem',
    backgroundColor: '#eee',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '0.1rem solid #00000044',
    borderRadius: '0.5rem',
    padding: '1rem',
  }

  return (
    <div style={AccessoryListStyle}>
      <div className="accessory-list-header">
        <div>Item</div>
        <div>Manufacturer</div>
        <div>Category</div>
        <div>Description</div>
        <div>Price</div>
        <div>Quantity</div>
      </div>
    </div>
  );
}

export default AccessoryList;
