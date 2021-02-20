import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class TradingInstrumentLeft extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row tradingInstrumentRow">
          <div className="col-md-6 col-sm-12">
            <div className="tradingInfoDiv">
              <h4 className="aboutDetailTitle">{this.props.title}</h4>
              <p className="aboutDetailText">{this.props.text}</p>
              <Link to={this.props.learnMoreLink}>
                <button className="btnPrimaryPink2 pl-4 pr-4 mt-4">
                  LEARN MORE
                </button>
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <img
              alt="image of instrument sec"
              src={this.props.imgUrl}
              className="tradingInstrumentImg"
            />
          </div>
        </div>
      </div>
    );
  }
}
