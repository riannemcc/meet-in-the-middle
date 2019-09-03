import React from "react";
import MapContainer from "./MapContainer";
import LocationA from "./LocationA";
import PropTypes from "prop-types";

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <LocationA />
        </div>
        <div>
          <MapContainer />
        </div>
      </div>
    );
  }
}

export default App;
