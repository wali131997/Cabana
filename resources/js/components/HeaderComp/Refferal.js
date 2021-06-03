import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Refferal extends Component {
  render() {
    return (
      <div>
        <div className="headerDropDown">
          <div
            className="headerDropDownItemDiv offset-md-1"
            onClick={this.props.dropDownHandler}
          >
            {/* <h5 className="headerDropDownTitle">PROMOTION</h5> */}
            <Link to="/patnership" className="headerLink">
              <div className="headerDropDownItem">Inroducing Broker </div>
            </Link>
            <Link to="/affiliate-program" className="headerLink">
              <div className="headerDropDownItem">Affiliate Program</div>
            </Link>
            <Link to="/white-label" className="headerLink">
              <div className="headerDropDownItem">White Label</div>
            </Link>
          </div>
          {/* <div
            className="headerDropDownItemDiv"
            onClick={this.props.dropDownHandler}
          >
            <h5 className="headerDropDownTitle">PATNERSHIP</h5>
            <Link to="/patnership" className="headerLink">
              <div className="headerDropDownItem">Patnership </div>
            </Link>
          </div> */}
          <div className="headerDropDownImgDiv">
            <img
              className="headerDropDownImg"
              src="/assets/images/promotionsDrop.svg"
              style={{ width: "180px" }}
              alt="promotion"
            ></img>
          </div>
        </div>
      </div>
    );
  }
}
