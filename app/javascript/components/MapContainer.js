import React from "react";
import PropTypes from "prop-types";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div id="map">
        <Map
          google={this.props.google}
          zoom={18}
          initialCenter={{
            lat: this.props.mapCenterLat,
            lng: this.props.mapCenterLng
          }}
          center={{
            lat: this.props.mapCenterLat,
            lng: this.props.mapCenterLng
          }}
          options={{
            zoomControl: true,
            mapTypeControl: false,
            scaleControl: true,
            streetViewControl: false,
            rotateControl: false,
            fullscreenControl: false
          }}
        >
          {this.props.markers.map(
            function(marker, i) {
              return (
                <Marker
                  onClick={this.onMarkerClick}
                  key={i}
                  title={marker.name}
                  name={marker.name}
                  position={{
                    lat: marker.position.lat,
                    lng: marker.position.lng
                  }}
                />
              );
            }.bind(this)
          )}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAawXbpm33d8IIULhhrq-5JtHKwcacKbcY"
})(MapContainer);
