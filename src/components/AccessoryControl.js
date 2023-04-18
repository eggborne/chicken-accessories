
import React from "react";
import AccessoryList from "./AccessoryList";
import NewAccessoryModal from "./Modal";

class AccessoryControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      newFormVisible: false,
      accessoryList: []
    };
  }

  handleClickNewAccessory = () => {
    this.setState(() => ({
      newFormVisible: true
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

  render() {
    return (
      <React.Fragment>
      <AccessoryList 
        accessoryList={this.state.accessoryList}
        newFormVisible={this.state.newFormVisible}
        handleClickNewAccessory={this.handleClickNewAccessory}
        handleCancelAddAccessory={this.handleCancelAddAccessory}
        handleAddAccessory={this.handleAddAccessory}
      />
      </React.Fragment>
    );
  }


}

export default AccessoryControl;
