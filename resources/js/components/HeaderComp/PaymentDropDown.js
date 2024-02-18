import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class PaymentDropDown extends Component {
  render() {
    return (
      <div>
        <div className="headerDropDown">
          <div
            className="headerDropDownItemDiv"
            onClick={this.props.dropDownHandler}
          >
            <h5 className="headerDropDownTitle">PAYMENT</h5>
            <Link to="/deposite-withdraw">
              <div className="headerDropDownItem">Deposit/WithDrawal</div>
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
              src="/assets/images/paymentsDrop.svg"
            ></img>
          </div>
        </div>
      </div>
    );
  }
}
