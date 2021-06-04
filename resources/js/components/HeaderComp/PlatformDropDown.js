import React, { Component } from "react";
import { a } from "react-router-dom";
export default class PlatformDropDown extends Component {
  render() {
    return (
      <div>
        <div className="headerDropDown">
          <div
            className="headerDropDownItemDiv"
            onClick={this.props.dropDownHandler}
          >
            <h5 className="headerDropDownTitle">PLATFORMS</h5>
            <a to="/platform/mt5">

              <div className="headerDropDownItem">MetaTrader 5</div>
            </a>
            <a to="/platform/mt5">
              <div className="headerDropDownItem">MetaTrader 4 Client Desktop</div>
            </a>
            <a to="/platform/mt5">
              <div className="headerDropDownItem">MetaTrader 5 Android</div>
            </a>
            <a to="/platform/mt5">
              <div className="headerDropDownItem">MetaTrader 4 Android</div>
            </a>

          </div>
          <div
            className="headerDropDownItemDiv"
            onClick={this.props.dropDownHandler}
          >
            <h5 className="headerDropDownTitle">iPhone Platform</h5>
            <a to="/platform/mt5">
              <div className="headerDropDownItem">MetaTrader 5 iPhone ,iPad $ iPod </div>
            </a>
            <a to="/platform/mt5">
              <div className="headerDropDownItem">MetaTrader 4 iPhone ,iPad $ iPod </div>
            </a>
          </div>
          <div className="headerDropDownImgDiv">
            <img
              className="headerDropDownImg"
              src="/assets/images/platformDrop.svg"
            ></img>
          </div>
        </div>
      </div>
    );
  }
}
