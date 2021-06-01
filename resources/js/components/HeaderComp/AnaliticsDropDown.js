import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class AnalyticsDropDown extends Component {
  render() {
    return (
      <div>
        <div className="headerDropDown">
          <div
            className="headerDropDownItemDiv offset-md-3"
            onClick={this.props.dropDownHandler}
          >
            <h5 className="headerDropDownTitle opacityZero">ANALYTICS</h5>
            <Link to="/education">
              <div className="headerDropDownItem">Education</div>
            </Link>
            <Link to="/education/meta-trader-4">
              <div className="headerDropDownItem">Analytics</div>
            </Link>
          </div>
          <div
            className="headerDropDownItemDiv opacityZero"
            onClick={this.props.dropDownHandler}
          >
            <h5 className="headerDropDownTitle">ACCOUNTS</h5>
            <Link to="">
              <div className="headerDropDownItem">Account Type</div>
            </Link>
            <Link to="">
              <div className="headerDropDownItem">Trading Instruments</div>
            </Link>
            <Link to="">
              <div className="headerDropDownItem">Currencies (FX)</div>
            </Link>
          </div>
          <div className="headerDropDownImgDiv">
            <img
              className="headerDropDownImg"
              src="/assets/images/analyticsDrop.svg"
            ></img>
          </div>
        </div>
      </div>
    );
  }
}
