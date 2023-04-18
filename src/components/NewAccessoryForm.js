import React from "react";

function NewAccessoryForm(props) {
  const newAccessoryFormStyle = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0.5rem',
  };

  function handleNewAccessoryFormSubmission(event) {
    event.preventDefault();
    console.log(event.target.item.value);
    console.log(event.target.manufacturer.value);
    console.log(event.target.description.value);
    console.log(event.target.category.value);
    console.log(event.target.price.value);
    console.log(event.target.quantity.value);
    props.onClickAddAccessory({
      item: event.target.item.value,
      manufacturer: event.target.manufacturer.value,
      description: event.target.description.value,
      category: event.target.category.value,
      price: event.target.price.value,
      quantity: event.target.quantity.value,
    })
  }

  return (
    <React.Fragment>
      <form style={newAccessoryFormStyle} onSubmit={handleNewAccessoryFormSubmission}>
        <div className='form-row'>
          <label for='item'>Item name</label>
          <input name='item' type='text' />
        </div>
        <div className='form-row'>
          <label for='manufacturer'>Manufacturer</label>
          <input name='manufacturer' type='text' />
        </div>
        <div className='form-row'>
          <label for='description'>Description</label>
          <textarea name='description' type='textarea' />
        </div>
        <div className='form-row'>
          <label for='category'>Category</label>
          <select name='category'>
            {props.categories.map((category) => <option name={category}>{`${category[0].toUpperCase()}${category.slice(1)}`}</option>)}
          </select>
        </div>
        <div className='form-row'>
          <label for='price'>Price</label>
          <input name='price' type='number' />
        </div>
        <div className='form-row'>
          <label for='quantity'>Quantity</label>
          <input name='quantity' type='number' />
        </div>
        <button type='submit' className='green'>Save</button>
      </form>
    </React.Fragment>
  );
}

export default NewAccessoryForm;