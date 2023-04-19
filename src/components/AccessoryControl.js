
import React from "react";
import AccessoryList from "./AccessoryList";
import AccessoryDetailCard from "./AccessoryDetailCard";
import Cart from './Cart';
import CartWidget from './CartWidget';
import { v4 } from 'uuid';


class AccessoryControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      newFormVisible: false,
      detailsShowing: null,
      cartShowing: false,
      cart: [],
      accessoryList: [
        {
          item: 'Mag Harness 5000',
          manufacturer: 'Chickens Inc.',
          description: 'A sturdy harness with magnetic closures.',
          category: 'Harnesses',
          price: '24',
          quantity: '4',
          id: v4(),
        },
        {
          item: 'Velvet Claw Sheath (set of 2)',
          manufacturer: 'CluckCo',
          description: 'A luxurious covering for your pet\'s deadly claws.',
          category: 'Gloves',
          price: '125',
          quantity: '40',
          id: v4(),
        },
        {
          item: 'Chicken Pants',
          manufacturer: 'CluckCo',
          description: 'A one-size-fits-all solution to your chicken\'s rampant nudity.',
          category: 'Pants',
          price: '80',
          quantity: '200',
          id: v4(),
        },
      ]
    };
  }

  getAccessoryById = (id, list = this.state.accessoryList) => {
    return list.filter(accessory => accessory.id === id)[0];
  };

  handleClickNewAccessory = () => {
    this.setState(() => ({
      newFormVisible: true,
    }));
  };

  handleClickDetails = (id) => {
    this.setState(() => ({
      detailsShowing: id,
    }));
  };

  handleClickViewCart = () => {
    this.setState((prevState) => ({
      cartShowing: !prevState.cartShowing,
    }));
  };

  handleAddAccessory = (newAccessory) => {
    console.log('clicked handleAddAccessory!', newAccessory);
    const newAccessoryList = this.state.accessoryList.concat(newAccessory);
    this.setState({
      accessoryList: newAccessoryList,
      newFormVisible: false
    });
  };

  handleCancelAddAccessory = () => {
    this.setState({ newFormVisible: false });
  };

  handleClickBuy = (id) => {
    console.log('BOUGHT', id);
    let newAccessoryList = [...this.state.accessoryList];
    let newCart = [...this.state.cart];
    let boughtItem = this.getAccessoryById(id, newAccessoryList);
    newCart.push(boughtItem.id);
    boughtItem.quantity--;

    this.setState({ accessoryList: newAccessoryList, cart: newCart });
  };

  handleClickDetailsBack = () => {
    this.setState({ detailsShowing: null });
  };

  getCartObjects = () => {
    return [...this.state.cart].map(itemId => this.getAccessoryById(itemId))
  }

  render() {
    const detailItem = this.getAccessoryById(this.state.detailsShowing);
    return (
      <React.Fragment>
        {!this.state.detailsShowing ?
          !this.state.cartShowing ?
          <AccessoryList
            accessoryList={this.state.accessoryList}
            newFormVisible={this.state.newFormVisible}
            handleClickNewAccessory={this.handleClickNewAccessory}
            handleCancelAddAccessory={this.handleCancelAddAccessory}
            handleAddAccessory={this.handleAddAccessory}
            handleClickDetails={this.handleClickDetails}
          />
          :
          <Cart cart={this.getCartObjects()}/>
          :
          <AccessoryDetailCard
            item={detailItem}
            onClickGoBack={this.handleClickDetailsBack}
            onClickBuy={this.handleClickBuy}
          />
        }
        <CartWidget cartShowing={this.state.cartShowing} cart={this.state.cart} onClickViewCart={this.handleClickViewCart} />
      </React.Fragment>
    );
  }


}

export default AccessoryControl;
