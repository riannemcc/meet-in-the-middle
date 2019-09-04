import React from "react";
import Script from "react-load-script";
import PropTypes from "prop-types";

class EnterLocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query1: "",
      query2: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleScriptLoad = this.handleScriptLoad.bind(this);
    this.getOptions = this.getOptions.bind(this);
  }

  handleSubmit(query, event) {
    event.preventDefault();
    let address = this.state[query].split(' ').join('+')
    let url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "+CA&key=AIzaSyAawXbpm33d8IIULhhrq-5JtHKwcacKbcY"
    fetch(url)
      .then(json => json.json())
      .then(response => this.props.updateMarkers(response.results[0].geometry.location))
  }

  handleScriptLoad(query, e) {
    this.setState({
      [query]: e.target.value
    });
    var input = document.getElementsByClassName("address_text_box")
    var text_box_array = Array.prototype.slice.call( input )
    console.log(text_box_array)
    text_box_array.forEach(function(node) {
      let autocomplete = new google.maps.places.Autocomplete(node, this.getOptions());
      autocomplete.setFields(["address_components", "formatted_address"]);
      autocomplete.addListener("place_changed", () => {
        let addressObject = autocomplete.getPlace();
        console.log(addressObject.formatted_address)
        let address = addressObject.address_components;

        if (address) {
          this.setState({
            [query]: addressObject.formatted_address
          });
        }
      });
    }, this);
  }

  getOptions() {
    let sw = new google.maps.LatLng(51.425564, -0.330801);
    let ne = new google.maps.LatLng(51.681786, 0.301162);
    let london = new google.maps.LatLngBounds(sw, ne);
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
        <p style={{marginLeft:"10px", fontFamily:"Verdana", padding:"5px"}}>First enter your location</p>
        <form onSubmit={(e) => { this.handleSubmit('query1', e)} }>
          <input
            id="address_text_box1"
            className="address_text_box"
            type="text"
            placeholder={`Where ${this.props.who}?`}
            value={this.state.query1}
            onChange={(e) => { this.handleScriptLoad('query1', e) } }
            style={{
              padding:5,
              width:350,
              marginRight:10,
              borderRadius:10
            }}
          />
          <input type="submit" id="find_yourself" value="Find" />

        </form>
        <p style={{marginLeft:"10px", fontFamily:"Verdana", padding:"5px"}}>Now enter your friend's location</p>
        <form onSubmit={(e) => { this.handleSubmit('query2', e)} }>
          <input
            id="address_text_box2"
            className="address_text_box"
            type="text"
            placeholder={`Where ${this.props.who}?`}
            value={this.state.query2}
            onChange={(e) => { this.handleScriptLoad('query2', e) } }
            style={{
              padding:5,
              width:350,
              marginRight:10,
              borderRadius:10
            }}
          />
          <input type="submit" id="find_a_friend" value="Find" />

        </form>
        <input type="submit" value="Find Midl" />

      </div>
    );
  }
}

export default EnterLocation;
