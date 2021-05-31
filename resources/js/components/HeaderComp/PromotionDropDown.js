import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class PromotionDropDown extends Component {
  render() {
    return (
      <div>
        <div className="headerDropDown">
          <div
            className="headerDropDownItemDiv"
            onClick={this.props.dropDownHandler}
          >
            <h5 className="headerDropDownTitle">PROMOTION</h5>
            <Link to="/newPromotion" className="headerLink">
              <div className="headerDropDownItem">Get 35% bonus on deposit </div>
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
