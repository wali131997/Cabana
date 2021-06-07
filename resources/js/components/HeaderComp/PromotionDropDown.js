import React, { Component } from "react";
import { a } from "react-router-dom";
export default class PromotionDropDown extends Component {
  render() {
    return (
      <div>
        <div className="headerDropDown">
          <div
            className="headerDropDownItemDiv offset-md-2"
            onClick={this.props.dropDownHandler}
          >
            <h5 className="headerDropDownTitle">PROMOTION</h5>
            <a href="/newPromotion" className="headera">
              <div className="headerDropDownItem">Get 35% bonus on deposit </div>
            </a>
          </div>
          <div
            className="headerDropDownItemDiv"
            onClick={this.props.dropDownHandler}
          >
            <h5 className="headerDropDownTitle">REFER</h5>
            <a href="/reffer-friend" className="headera">
              <div className="headerDropDownItem">Refer a Friend</div>
            </a>
            <a href="/reffer-friend" className="headera opacityZero">
              <div className="headerDropDownItem">Refer a Friend</div>
            </a>
          </div>
          {/* <div
            className="headerDropDownItemDiv"
            onClick={this.props.dropDownHandler}
          >
            <h5 className="headerDropDownTitle">PATNERSHIP</h5>
            <a href="/patnership" className="headera">
              <div className="headerDropDownItem">Patnership </div>
            </a>
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
