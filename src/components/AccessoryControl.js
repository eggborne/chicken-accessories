
import React from "react";
import AccessoryList from "./AccessoryList";
import NewAccessoryModal from "./NewAccessoryModal";

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

  handleAddingNewAccessory = (newAccessory) => {
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
      <AccessoryList newFormVisible={this.state.newFormVisible}
        handleCancelAddAccessory={this.handleCancelAddAccessory}
        handleClickNewAccessory={this.handleClickNewAccessory}
      />
      </React.Fragment>
    );
  }


}

export default AccessoryControl;
