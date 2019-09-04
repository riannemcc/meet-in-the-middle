import React from "react";
import PropTypes from "prop-types";
import EnterLocation from "./EnterLocation";

class LocationFinder extends React.Component {
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
        <EnterLocation
          who={'are you'}
          updateMarkers={this.props.updateMarkers}
          changeLocation={this.selectLocation}
          addMidlMarker={this.props.addMidlMarker}
        />
      </div>
    );
  }
}

export default LocationFinder;
