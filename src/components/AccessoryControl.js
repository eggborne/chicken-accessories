
import React from "react";
import AccessoryList from "./AccessoryList";
import AccessoryDetailCard from "./AccessoryDetailCard";
import { v4 } from 'uuid';


class AccessoryControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      newFormVisible: false,
      detailsShowing: null,
      accessoryList: [
        {
          item: 'Mag Harness 5000',
          manufacturer: 'ChickenCo',
          description: 'A sturdy harness with magnetic closures.',
          category: 'Harnesses',
          price: '24',
          quantity: '250',
          id: v4(),
        }
      ]
    };
  }

  getAccessoryById = id => {
    return this.state.accessoryList.filter(accessory => accessory.id === id)[0];
  }

  handleClickNewAccessory = () => {
    this.setState(() => ({
      newFormVisible: true,
    }));
  }

  handleClickDetails = (id) => {
    this.setState(() => ({
      detailsShowing: id,
    }));
  }

  handleAddAccessory = (newAccessory) => {
    console.log('clicked handleAddAccessory!', newAccessory);
    const newAccessoryList = this.state.accessoryList.concat(newAccessory);
    this.setState({accessoryList: newAccessoryList,
      newFormVisible: false });
  }

  handleCancelAddAccessory = () => {
    this.setState({ newFormVisible: false });
  }

  handleClickDetailsBack = () => {
    this.setState({ detailsShowing: null });
  }

  render() {
    if (this.state.detailsShowing === null) {
      return (
        <React.Fragment>
        <AccessoryList 
          accessoryList={this.state.accessoryList}
          newFormVisible={this.state.newFormVisible}
          handleClickNewAccessory={this.handleClickNewAccessory}
          handleCancelAddAccessory={this.handleCancelAddAccessory}
          handleAddAccessory={this.handleAddAccessory}
          handleClickDetails={this.handleClickDetails}
        />
        </React.Fragment>
      );
    } else {
      const detailItem = this.getAccessoryById(this.state.detailsShowing);
      return (
        <AccessoryDetailCard 
          item={detailItem}
          onClickGoBack={this.handleClickDetailsBack}
        />
      );
    }
  }


}

export default AccessoryControl;
