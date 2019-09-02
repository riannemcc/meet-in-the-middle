import React from "react"
import PropTypes from "prop-types"
import PissOffWorld from './hello_world/PissOffWorld.js'
import EnterEnemy from './hello_world/EnterEnemy.js'

class HelloWorld extends React.Component {

  constructor(props) {
    super(props);
    this.state = {person: 'Tim'};
    this.changeName = this.changeName.bind(this);
  }

  changeName(name) {
    this.setState({person: name});
  }

  render () {
    return (
      <div>
        Hello world!
        <PissOffWorld specificPerson={this.state.person}/>
        <EnterEnemy changeEnemy={this.changeName}/>
      </div>
    );
  }
}

export default HelloWorld
