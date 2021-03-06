import React from "react";
import Script from "react-load-script";
import PropTypes from "prop-types";

class EnterLocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleScriptLoad = this.handleScriptLoad.bind(this);
    this.getOptions = this.getOptions.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let address = this.state.query.split(' ').join('+')
    let url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "+CA&key=AIzaSyAawXbpm33d8IIULhhrq-5JtHKwcacKbcY"
    fetch(url)
      .then(json => json.json())
      .then(response => this.props.updateMarkers(response.results[0].geometry.location))
  }

  handleScriptLoad(e) {
    this.setState({
      query: e.target.value
    });
    var input = document.getElementById("autocomplete")
    let autocomplete = new google.maps.places.Autocomplete(input, this.getOptions());
    autocomplete.setFields(["address_components", "formatted_address"]);
    autocomplete.addListener("place_changed", () => {
      let addressObject = autocomplete.getPlace();
      console.log(addressObject.formatted_address)
      let address = addressObject.address_components;

      if (address) {
        this.setState({
          query: addressObject.formatted_address
        });
      }
    })
  }

  getOptions() {
    let sw = new google.maps.LatLng(51.425564, -0.330801)
    let ne = new google.maps.LatLng(51.681786, 0.301162)
    let london = new google.maps.LatLngBounds(sw, ne)
    var options = {
      bounds: london
    };
    return options
  }

  render() {
    return (
      <div style={{margin:10}}>
        <Script
          url="https://maps.googleapis.com/maps/apis/js?key=AIzaSyAawXbpm33d8IIULhhrq-5JtHKwcacKbcY&libraries=places"
          onLoad={this.handleScriptLoad}
        />
        <form onSubmit={this.handleSubmit}>
          <input
            id="autocomplete"
            type="text"
            placeholder={`Where ${this.props.who}?`}
            value={this.state.query}
            onChange={this.handleScriptLoad}
            style={{
              padding:5,
              width:350,
              marginRight:10,
              borderRadius:10
            }}
          />
          <input type="submit" value="Find" />
        </form>
      </div>
    );
  }
}

export default EnterLocation;
