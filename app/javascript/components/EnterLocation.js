import React from "react";
import Script from "react-load-script";
import PropTypes from "prop-types";

class EnterLocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleScriptLoad = this.handleScriptLoad.bind(this);
    this.handlePlaceSelect = this.handlePlaceSelect.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    let address = this.state.query.split(' ').join('+')
    let url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "+CA&key=AIzaSyAawXbpm33d8IIULhhrq-5JtHKwcacKbcY"
    fetch(url)
    .then(json => json.json())
    .then(response => this.props.updateMarkers(response.results[0].geometry.location))
    .then(response => this.setState({query: ''}))
  }

  handleScriptLoad(e) {
    this.setState({ query: e.target.value });
    console.log("handle script load");
    let sw = new google.maps.LatLng(51.425564, -0.330801)
    let ne = new google.maps.LatLng(51.681786, 0.301162)
    let london = new google.maps.LatLngBounds(sw, ne)
    var input = document.getElementById("autocomplete")
    var options = { bounds: london };
    let autocomplete = new google.maps.places.Autocomplete(input, options);
    console.log(autocomplete);
    autocomplete.setFields(["address_components", "formatted_address"]);
    autocomplete.addListener(autocomplete, "place_changed", this.handlePlaceSelect());
  }

  handlePlaceSelect() {
    console.log(autocomplete)
    let addressObject = autocomplete.getPlace();
    console.log(addressObject.formatted_address)
    let address = addressObject.address_components;

    if (address) {
      this.setState({
        query: addressObject.formatted_address
      });
    }
  }

  render() {
    return (
      <div>
        <Script
          url="https://maps.googleapis.com/maps/apis/js?key=AIzaSyAawXbpm33d8IIULhhrq-5JtHKwcacKbcY&libraries=places"
          onLoad={this.handleScriptLoad}
        />
        <form onSubmit={this.handleSubmit}>
          <input
            id="autocomplete"
            type="text"
            placeholder="Where are you?"
            value={this.state.query}
            onChange={this.handleScriptLoad}
            style={{
              margin: "0 auto",
              width:500
            }}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default EnterLocation;
