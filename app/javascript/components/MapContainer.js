import React from "react";
import PropTypes from "prop-types";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import Geocode from "react-geocode";

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      lat: 51.517432,
      lng: -0.073262,
      markers: [{ name: "Test", position: { lat: 51.517432, lng: -0.073262 } }]
    };
    this.onMapClicked = this.onMapClicked.bind(this);
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onAddItem = this.onAddItem.bind(this);
  }

  onMapClicked(props, marker, e) {
    console.log(props);
    console.log(marker);
    console.log(e);
  }

  onMarkerClick(props, marker, e) {
    console.log(marker);
  }

  onAddItem(props, marker, e) {
    console.log(props);
    console.log(marker);
    console.log(e.latLng.lat());
    this.setState(state => {
      let newMarker = {
        name: "Test",
        position: { lat: e.latLng.lat(), lng: e.latLng.lng() }
      };
      const markers = [...state.markers, newMarker];
      return {
        value: "",
        lat: 51.517432,
        lng: -0.073262,
        markers
      };
    });
  }

  render() {
    return (
      <div id="map">
        <Map
          google={this.props.google}
          onClick={this.onAddItem}
          zoom={18}
          initialCenter={{
            lat: this.state.lat,
            lng: this.state.lng
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
          {this.state.markers.map(
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
