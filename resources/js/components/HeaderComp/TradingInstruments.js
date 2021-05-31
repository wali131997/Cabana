import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class TradingInstruments extends Component {
  render() {
    return (
      <div>
        <div className="headerDropDown">
        <div
            className="headerDropDownItemDiv"
            onClick={this.props.dropDownHandler}
          >
            <h5 className="headerDropDownTitle">Trading Instruments</h5>
            <Link to="/trading-instruments">
              <div className="headerDropDownItem">Trading Instruments</div>
            </Link>
          </div>
          <div
            className="headerDropDownItemDiv "
            onClick={this.props.dropDownHandler}
          >
            <h5 className="headerDropDownTitle">More</h5>


            <Link to="/trading-currencies">
              <div className="headerDropDownItem">Currencies (FX)</div>
            </Link>
            <Link to="/account-type">
              <div className="headerDropDownItem">Precious Metals (Spot)</div>
            </Link>
            <Link to="/trading-instruments">
              <div className="headerDropDownItem">Commodities (Spot)</div>
            </Link>
            <Link to="/trading-currencies">
              <div className="headerDropDownItem">CFD indices (Spot)</div>
            </Link>
          </div>
          <div className="headerDropDownImgDiv">
            <img
              className="headerDropDownImg"
              src="/assets/images/paymentsDrop.svg"
            ></img>
          </div>
        </div>
      </div>
    );
  }
}
