import React from "react";
import MapContainer from "./MapContainer";
import LocationFinder from "./LocationFinder";
import PropTypes from "prop-types";
import "./styles.css"


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: "",
      mapCenterLat: 51.517432,
      mapCenterLng: -0.073262,
      markers: []
    };
    this.updateMarkers = this.updateMarkers.bind(this);
    this.updateMarkersSearch = this.updateMarkersSearch.bind(this);
  }

  updateMarkers(props, marker, e) {
    this.setState(state => {
      let newMarker = {
        name: "Test",
        position: { lat: e.latLng.lat(), lng: e.latLng.lng() }
      };
      const markers = [...state.markers, newMarker];
      return {
        value: "",
        mapCenterLat: e.latLng.lat(),
        mapCenterLng: e.latLng.lng(),
        markers
      };
    });
  }

  updateMarkersSearch(position) {
    this.setState(state => {
      let newMarker = {
        name: "Test",
        position: { lat: position.lat, lng: position.lng }
      };
      const markers = [...state.markers, newMarker];
      return {
        value: "",
        mapCenterLat: position.lat,
        mapCenterLng: position.lng,
        markers
      };
    });
  }

  render() {
    return (
      <div style={{margin:"0px"}}>
        <div className="locationFormContainer">
          <LocationFinder updateMarkers={this.updateMarkersSearch} />
        </div>
        <div>
          <MapContainer updateMarkers={this.updateMarkers} mapCenterLat={this.state.mapCenterLat} mapCenterLng={this.state.mapCenterLng} markers={this.state.markers} />
        </div>
      </div>
    );
  }
}

export default App;
