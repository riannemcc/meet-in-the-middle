import React from "react";
import PropTypes from "prop-types";

class EnterLocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.changeLocation(this.state.value);
    this.setState({ value: "" });
  }

  // setLocationA() {
  //   var input = document.getElementById("locationA");
  //   var searchBox = new google.maps.places.SearchBox(input);
  //   map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
  // }
  //
  // var markers = [];
  // searchBox.addListener("places_changed", function(){
  //   if(places.length == 0) {
  //     return;
  //   }
  //
  //   markers.forEach(function(marker){
  //     marker.setMap(null);
  //   });
  //   markers = [];
  //
  //   var bounds = new google.maps.LatLngBounds();
  //   places.forEach(function(place){
  //     if (!place.geometry){
  //       console.log("Returned place contains no geometry");
  //       return;
  //     }
  //     var icon = {
  //       url: place.icon,
  //       size: new google.maps.Size(71, 71),
  //       origin: new google.maps.Point(0, 0),
  //       anchor: new google.maps.Point(17, 34),
  //       scaledSize: new google.maps.Size(25, 25)
  //     };
  //     })
  //   })
  // })

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          ENTER LOCATION:
          <input
            id="locationA"
            type="text"
            placeholder="Where are you?"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default EnterLocation;
