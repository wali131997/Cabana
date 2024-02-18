import React, { Component } from "react";

export default class HeroSection extends Component {
  render() {
    return (
      <div className="heroBg" style={this.props.bg ? {backgroundImage:`url(/assets/images/${this.props.bg})`}:{display:'block'}}>
        <div className="heroRow">
          <h1 className="heroTitle">{this.props.title}</h1>
          <h1 className="heroTitle">{this.props.title2}</h1>
          <p className="heroText">{this.props.text}</p>
        </div>
      </div>
    );
  }
}
