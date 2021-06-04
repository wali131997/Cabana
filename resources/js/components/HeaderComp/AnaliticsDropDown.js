import React, { Component } from "react";
import { a } from "react-router-dom";
export default class AnalyticsDropDown extends Component {
  render() {
    return (
      <div>
        <div className="headerDropDown">
          <div
            className="headerDropDownItemDiv offset-md-3"
            onClick={this.props.dropDownHandler}
          >
            <h5 className="headerDropDownTitle ">EDUCATION</h5>
            <a href="/education">
              <div className="headerDropDownItem">Education</div>
            </a>

          </div>
          <div
            className="headerDropDownItemDiv "
            onClick={this.props.dropDownHandler}
          >
            <h5 className="headerDropDownTitle">ANALYTICS</h5>
            <a href="/education/meta-trader-4">
              <div className="headerDropDownItem">Analytics</div>
            </a>
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
