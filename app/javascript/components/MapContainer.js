import React from "react"
import PropTypes from "prop-types"

class MapContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        lat: 51.517432,
        lng: -0.073262
    }
  }

  render () {
    return (
      <div>
        Hello world!
      </div>
    );
  }
}

export default MapContainer