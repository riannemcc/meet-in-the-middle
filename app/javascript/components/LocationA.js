import React from "react";
import PropTypes from "prop-types";
import EnterLocation from "./EnterLocation";

class LocationA extends React.Component {
  constructor(props) {
    super(props);
    this.state = { location: "" };
    this.selectLocation = this.selectLocation.bind(this);
  }

  selectLocation(location) {
    this.setState({ location: location });
  }

  render() {
    return (
      <div>
        <p style={{marginLeft:"10px", fontFamily:"Verdana", padding:"5px"}}>First enter your location</p>
        <EnterLocation
          who={'are you'}
          updateMarkers={this.props.updateMarkers}
          changeLocation={this.selectLocation}
        />
      </div>
    );
  }
}

export default LocationA;
