import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class PAMMsDropDown extends Component {
  render() {
    return (
      <div>
        <div className="headerDropDown">
          <div
            className="headerDropDownItemDiv"
            onClick={this.props.dropDownHandler}
          >
            <h5 className="headerDropDownTitle">PAMM</h5>
            <Link to="/PAMM">
              <div className="headerDropDownItem">PAMM Manager</div>
            </Link>
          </div>
          <div
            className="headerDropDownItemDiv"
            onClick={this.props.dropDownHandler}
          >
            <h5 className="headerDropDownTitle">ACCOUNTS</h5>
            <Link to="/account-type">
              <div className="headerDropDownItem">Account Type</div>
            </Link>
            <Link to="/trading-instruments">
              <div className="headerDropDownItem">Trading Instruments</div>
            </Link>
            <Link to="/trading-currencies">
              <div className="headerDropDownItem">Currencies (FX)</div>
            </Link>
          </div>
          <div className="headerDropDownImgDiv">
            <img
              className="headerDropDownImg"
              src="/assets/images/pammDrop.svg"
            ></img>
          </div>
        </div>
      </div>
    );
  }
}
