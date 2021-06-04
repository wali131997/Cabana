import React, { Component } from "react";
import { a } from "react-router-dom";
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
            <a href="/account-type">
              <div className="headerDropDownItem">Account Type</div>
            </a>
            <a href="/islamic-trading">
              <div className="headerDropDownItem">Islamic Account</div>
            </a>
            <a href="/trading-termonology">
              <div className="headerDropDownItem">Trading Terminology</div>
            </a>
            <a href="/mt5-platform" className="opacityZero">
              <div className="headerDropDownItem">MetaTrader 5</div>
            </a>
            <a href="/mt5-platform" className="opacityZero">
              <div className="headerDropDownItem">MetaTrader 5</div>
            </a>
          </div>
          <div
            className="headerDropDownItemDiv"
            onClick={this.props.dropDownHandler}
          >
            <h5 className="headerDropDownTitle">TRADING PLATFORMS</h5>
            <a href="/mt4-platform">

              <div className="headerDropDownItem">MetaTrader 4</div>
            </a>
            <a href="/mt5-platform">
              <div className="headerDropDownItem">MetaTrader 5</div>
            </a>
            <a href="/mt5-platform" className="opacityZero">
              <div className="headerDropDownItem">MetaTrader 5</div>
            </a>
            <a href="/mt5-platform" className="opacityZero">
              <div className="headerDropDownItem">MetaTrader 5</div>
            </a>
            <a href="/mt5-platform" className="opacityZero">
              <div className="headerDropDownItem">MetaTrader 5</div>
            </a>

          </div>
          <div
            className="headerDropDownItemDiv"
            onClick={this.props.dropDownHandler}
          >
            <h5 className="headerDropDownTitle">Trading Instruments</h5>
            <a href="/trading-instruments">
              <div className="headerDropDownItem">Trading Instruments</div>
            </a>
            <a href="/trading-currencies">
              <div className="headerDropDownItem">Currencies (FX)</div>
            </a>
            <a href="/precious-metals" >
              <div className="headerDropDownItem">Precious Metals</div>
            </a>
            <a href="/comodoties" >
              <div className="headerDropDownItem">Commodities</div>
            </a>
            <a href="/cfd-incdices" >
              <div className="headerDropDownItem">CFD Indices Pairs</div>
            </a>
          </div>
          <div
            className="headerDropDownItemDiv"
            onClick={this.props.dropDownHandler}
          >
            <h5 className="headerDropDownTitle">Funds</h5>
            <a href="/deposite-withdraw">
              <div className="headerDropDownItem">Deposit & Withdrawal</div>
            </a>
            <a href="/protection-funds">
              <div className="headerDropDownItem">Protection of funds</div>
            </a>
            <a href="/negative-balance-protection">
              <div className="headerDropDownItem">Negative Balance Protection</div>
            </a>
            <a href="/mt5-platform" className="opacityZero">
              <div className="headerDropDownItem">MetaTrader 5</div>
            </a>
            <a href="/mt5-platform" className="opacityZero">
              <div className="headerDropDownItem">MetaTrader 5</div>
            </a>
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
