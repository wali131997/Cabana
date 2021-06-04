import React, { Component } from "react";
import { a } from "react-router-dom";
export default class PAMMsDropDown extends Component {
  render() {
    return (
      <div>
        <div className="headerDropDown">
          <div
            className="headerDropDownItemDiv offset-md-3"
            onClick={this.props.dropDownHandler}
          >
            <h5 className="headerDropDownTitle">CABANA INVEST</h5>
            <a href="/social-trading">
              <div className="headerDropDownItem">Social Trading</div>
            </a>
            <a href="/PAMM">
              <div className="headerDropDownItem">PAMM Manager</div>
            </a>
            {/* <a href="/PAMM">
              <div className="headerDropDownItem">Copy Trading</div>
            </a> */}
          </div>
          <div
            className="headerDropDownItemDiv opacityZero"
            onClick={this.props.dropDownHandler}
          >
            <h5 className="headerDropDownTitle">ACCOUNTS</h5>
            <a href="">
              <div className="headerDropDownItem">Account Type</div>
            </a>
            <a href="">
              <div className="headerDropDownItem">Trading Instruments</div>
            </a>
            <a href="">
              <div className="headerDropDownItem">Currencies (FX)</div>
            </a>
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
