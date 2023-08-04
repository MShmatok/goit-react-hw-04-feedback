import React, { Component } from 'react';

class Test extends Component {
  state = {
    x: '80',
    y: '50',
    z: '55',
    xx: 20,
    yy: 100,
    zz: 5,
  };
  setValueX = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  countDist = () => {
    return Math.sqrt(
      Math.pow(80 - this.state.x, 2) +
        Math.pow(20 - this.state.y, 2) +
        Math.pow(60 - this.state.z, 2)
    );
  };
  render() {
    return (
      <>
        <input
          name="x"
          type="number"
          value={this.state.x}
          onChange={this.setValueX}
        />
        <input
          name="y"
          type="number"
          value={this.state.y}
          onChange={this.setValueX}
        />
        <input
          name="z"
          type="number"
          value={this.state.z}
          onChange={this.setValueX}
        />
        <p>{this.countDist()}</p>
        <p>{this.state.x / this.state.xx}</p>
        <p>{this.state.y / this.state.yy}</p>
        <p>{this.state.z / this.state.zz}</p>
      </>
    );
  }
}

export default Test;
