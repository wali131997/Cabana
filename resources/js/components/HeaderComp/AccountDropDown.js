import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class AccountDropDown extends Component {
  render() {
    return (
      <div>
        <div className="headerDropDown">
          <div
            className="headerDropDownItemDiv"
            onClick={this.props.dropDownHandler}
          >
            <h5 className="headerDropDownTitle">ACCOUNTS</h5>
            <Link to="/account-type">
              <div className="headerDropDownItem">Account Type</div>
            </Link>


          </div>
          <div
            className="headerDropDownItemDiv"
            onClick={this.props.dropDownHandler}
          >
            <h5 className="headerDropDownTitle">PLATFORMS</h5>
            <Link to="/platform/mt5">

              <div className="headerDropDownItem">MetaTrader 5</div>
            </Link>
            <Link to="/platform/mt5">
              <div className="headerDropDownItem">MetaTrader 4 Client Desktop</div>
            </Link>
            <Link to="/platform/mt5">
              <div className="headerDropDownItem">MetaTrader 5 Android</div>
            </Link>
            <Link to="/platform/mt5">
              <div className="headerDropDownItem">MetaTrader 4 Android</div>
            </Link>

          </div>
          <div className="headerDropDownImgDiv">
            <img
              className="headerDropDownImg"
              style={{ width: "150px" }}
              src="/assets/images/accountsDrop.svg"
            ></img>
          </div>
        </div>
      </div>
    );
  }
}
