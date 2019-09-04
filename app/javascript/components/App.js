import React from "react";
import MapContainer from "./MapContainer";
import LocationFinder from "./LocationFinder";
import PropTypes from "prop-types";
import "./styles.css";
import MidlLocation from "./MidlLocation";


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
    this.findXMidl = this.findXMidl.bind(this);
    this.findYMidl = this.findYMidl.bind(this);
  }

  updateMarkers() {
    console.log('updateMarkers')
    console.log(this.findXMidl)
    console.log(this.findYMidl)
    this.setState(state => {
      let newMarker = {
        name: "Test",
        position: { lat: this.findXMidl(), lng: this.findYMidl() }
      };
      const markers = [...state.markers, newMarker];
      return {
        value: "",
        mapCenterLat: this.findXMidl(),
        mapCenterLng: this.findYMidl(),
        markers
      };
    });
  }

  findXMidl() {
    let xSum = this.state.markers[0].position.lat + this.state.markers[1].position.lat
    let x3 = xSum / 2
    console.log(x3)
    return x3
  }

  findYMidl() {
    let ySum = this.state.markers[0].position.lng + this.state.markers[1].position.lng
    let y3 = ySum / 2
    console.log(y3)
    return y3
  }

  updateMarkersSearch(position) {
    console.log('calling updateMarkersSearch')
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
    console.log(this.state.markers)
  }

  render() {
    return (
      <div style={{margin:"0px"}}>
        <div className="locationFormContainer">
          <LocationFinder addMidlMarker={this.updateMarkers} updateMarkers={this.updateMarkersSearch} />
        </div>
        <div className="midlLocationContainer">
          <MidlLocation />
        </div>
        <div>
          <MapContainer updateMarkers={this.updateMarkers} mapCenterLat={this.state.mapCenterLat} mapCenterLng={this.state.mapCenterLng} markers={this.state.markers} />
        </div>
      </div>
    );
  }
}

export default App;
