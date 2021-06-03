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
            <Link to="/islamic-trading">
              <div className="headerDropDownItem">Islamic Account</div>
            </Link>
            <Link to="/trading-termonology">
              <div className="headerDropDownItem">Trading Termonology</div>
            </Link>
            <Link to="/mt5-platform" className="opacityZero">
              <div className="headerDropDownItem">MetaTrader 5</div>
            </Link>
            <Link to="/mt5-platform" className="opacityZero">
              <div className="headerDropDownItem">MetaTrader 5</div>
            </Link>
          </div>
          <div
            className="headerDropDownItemDiv"
            onClick={this.props.dropDownHandler}
          >
            <h5 className="headerDropDownTitle">TRADING PLATFORMS</h5>
            <Link to="/mt4-platform">

              <div className="headerDropDownItem">MetaTrader 4</div>
            </Link>
            <Link to="/mt5-platform">
              <div className="headerDropDownItem">MetaTrader 5</div>
            </Link>
            <Link to="/mt5-platform" className="opacityZero">
              <div className="headerDropDownItem">MetaTrader 5</div>
            </Link>
            <Link to="/mt5-platform" className="opacityZero">
              <div className="headerDropDownItem">MetaTrader 5</div>
            </Link>
            <Link to="/mt5-platform" className="opacityZero">
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
            <Link to="/precious-metals" >
              <div className="headerDropDownItem">Precious Metals</div>
            </Link>
            <Link to="/comodoties" >
              <div className="headerDropDownItem">Commodities</div>
            </Link>
            <Link to="/cfd-incdices" >
              <div className="headerDropDownItem">CFD Indices Pairs</div>
            </Link>
          </div>
          <div
            className="headerDropDownItemDiv"
            onClick={this.props.dropDownHandler}
          >
            <h5 className="headerDropDownTitle">Funds</h5>
            <Link to="/deposite-withdraw">
              <div className="headerDropDownItem">Deposit & Withdrawal</div>
            </Link>
            <Link to="/protection-funds">
              <div className="headerDropDownItem">Protection of funds</div>
            </Link>
            <Link to="/platform/mt5">
              <div className="headerDropDownItem">Negative Balance Protection</div>
            </Link>
            <Link to="/mt5-platform" className="opacityZero">
              <div className="headerDropDownItem">MetaTrader 5</div>
            </Link>
            <Link to="/mt5-platform" className="opacityZero">
              <div className="headerDropDownItem">MetaTrader 5</div>
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
