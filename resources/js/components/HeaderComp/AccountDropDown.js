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
            <h5 className="headerDropDownTitle">TRADING ACCOUNTS</h5>
            <Link to="/account-type">
              <div className="headerDropDownItem">Account Type</div>
            </Link>


          </div>
          <div
            className="headerDropDownItemDiv"
            onClick={this.props.dropDownHandler}
          >
            <h5 className="headerDropDownTitle">TRADING PLATFORMS</h5>
            <Link to="/platform/mt5">

              <div className="headerDropDownItem">MetaTrader 4</div>
            </Link>
            <Link to="/platform/mt5">
              <div className="headerDropDownItem">MetaTrader 5</div>
            </Link>


          </div>
          <div
            className="headerDropDownItemDiv"
            onClick={this.props.dropDownHandler}
          >
            <h5 className="headerDropDownTitle">Trading Instruments</h5>
            <Link to="/trading-instruments">
              <div className="headerDropDownItem">Trading Instruments</div>
            </Link>
            <Link to="/trading-currencies">
              <div className="headerDropDownItem">Currencies (FX)</div>
            </Link>
            {/* <Link to="/trading-currencies">
              <div className="headerDropDownItem">CFD indices (Spot)</div>
            </Link> */}

          </div>
          <div
            className="headerDropDownItemDiv"
            onClick={this.props.dropDownHandler}
          >
            <h5 className="headerDropDownTitle">Funds</h5>
            <Link to="/deposite-withdraw">
              <div className="headerDropDownItem">Deposit/WithDrawal</div>
            </Link>
            <Link to="/platform/mt5">
              <div className="headerDropDownItem">Protection of funds</div>
            </Link>
            <Link to="/platform/mt5">
              <div className="headerDropDownItem">Negative Balance Protection</div>
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
