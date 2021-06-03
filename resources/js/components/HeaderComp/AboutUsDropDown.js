import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class AboutUsDropDown extends Component {
  render() {
    return (
      <div>
        <div className="headerDropDown">
          <div
            className="headerDropDownItemDiv offset-md-2"
            onClick={this.props.dropDownHandler}
          >
            {/* <h5 className="headerDropDownTitle">ABOUT US</h5> */}
            <Link to="/about-us">
              <div className="headerDropDownItem">News and Events</div>
            </Link>
            <Link to="/about-us">
              <div className="headerDropDownItem">Why Cabana</div>
            </Link>
            <Link to="/our-location">
              <div className="headerDropDownItem">Contact Us</div>
            </Link>
            <Link to="/faqs">
              <div className="headerDropDownItem">FAQ's</div>
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
              src="/assets/images/aboutUsDrop.svg"
              alt="about US"
            ></img>
          </div>
        </div>
      </div>
    );
  }
}
