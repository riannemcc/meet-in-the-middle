import React from "react";
import PropTypes from "prop-types";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends React.Component {
  render() {
    return (
      <div id="map">
        <Map
          google={this.props.google}
          zoom={18}
          initialCenter={{
            lat: 51.517432,
            lng: -0.073262
          }}
          options={{
            zoomControl: true,
            mapTypeControl: false,
            scaleControl: true,
            streetViewControl: false,
            rotateControl: false,
            fullscreenControl: false
          }}
        ></Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAawXbpm33d8IIULhhrq-5JtHKwcacKbcY"
})(MapContainer);
