import React, { Component } from "react";

export default class TradingComponent extends Component {
  render() {
    return (
      <div className="tradingBg1">
        <div className="container-fluid ">
          <div className="row tradingPlatformRow">
            <div className="col-md-5 col-sm-12">
              <h2 className="tradingTitle">TRADING PLATFORMS</h2>
              <p className="tradingText">
                Trade currencies, Gold, Curd Oil, and more using MetaTrader4,
                the world most reliable trading platform
                <br />
                Trade the market from any Desktop, Andriod, IOS, Carry your
                office with you.
              </p>
              <div className="tradingButtons">
                <button className="btnTradingLive">OPEN LIVE ACCOUNT</button>
                <button className="btnTradingDemo">OPEN DEMO ACCOUNT</button>
              </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-5 pb-3 col-sm-12">
              <img
                className="fitImage"
                src="/assets/images/tradingImage.png"
              ></img>
            </div>
            <div className="col-md-1 col-sm-12  ">
              <div className="chatCol">
                <div className="chatFixBox">
                  <div className="chatImageBox">
                    <img
                      className="chatImage"
                      src="/assets/images/chatIcon.png"
                      alt="chatImage"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
