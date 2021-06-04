import React, { Component } from "react";

export default class HeroSec3 extends Component {
  render() {
    return (
      <div className="heroBg" style={this.props.bg ? {backgroundImage:`url(/assets/images/${this.props.bg})`}:{display:'block'}}>
        <div className="heroRow">
          <h1 className="heroTitle">{this.props.title}</h1>
          <h1 className="heroTitle">{this.props.title2}</h1>
          <p className="heroText mb-0">{this.props.text}</p>
          <p className="heroText">{this.props.text2}</p>
        </div>
      </div>
    );
  }
}
