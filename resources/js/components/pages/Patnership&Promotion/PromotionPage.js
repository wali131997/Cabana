import React, { Component } from "react";
import HeroSection from "../AboutUsPage/components/HeroSection";
import TradingComponent from "../LandingPage/components/TradingComponent";
import GetStartedSec from "../TermsAndConditionPage/components/GetStartedSec";

export default class PromotionPage extends Component {
 constructor(props) {
   super(props);
   this.state = {
    activeData: [
      {
        imgURL: "/assets/images/promotion3.png",
        title: "Client Support Fund",
      },
      {
        imgURL: "/assets/images/promotion2.png",
        title: "35% Trading Bonus",
      },
      {
        imgURL: "/assets/images/promotion1.png",
        title: "Change The Game contest",
      },
    ],
    expiredData: [
      {
        imgURL: "/assets/images/promotion3.png",
        title: "Client Support Fund",
      },
      {
        imgURL: "/assets/images/promotion2.png",
        title: "35% Trading Bonus",
      },
      {
        imgURL: "/assets/images/promotion1.png",
        title: "Change The Game contest",
      },
    ],
  };
 }
 
  render() {
    return (
      <div>
        <HeroSection title="PROMOTIONS" />
        <div className="container-fluid">
          <div className="row basicRow">
            <div className="col-12 text-center ">
              <h4 className="aboutDetailTitle mb-3">Active</h4>
            </div>
            {this.state.activeData &&
              this.state.activeData.map((item) => {
                return (
                  <div className="col-md-4 col-sm-12 mt-4">
                    <div className="centerDiv text-center">
                      <img
                        className="fitImage"
                        src={item.imgURL}
                        alt="active promotion"
                        style={{ width: "90%" }}
                      ></img>
                      <div className="termsCardTitle mt-2">{item.title}</div>
                    </div>
                  </div>
                );
              })}
            <div className="col-12 text-center mt-5 ">
              <h4 className="aboutDetailTitle mb-3">Expired</h4>
            </div>
            {this.state.expiredData &&
              this.state.expiredData.map((item) => {
                return (
                  <div className="col-md-4 col-sm-12 mt-2">
                    <div className="centerDiv text-center">
                      <img
                        className="fitImage"
                        src={item.imgURL}
                        alt="active promotion"
                        style={{ width: "90%" }}
                      ></img>
                      <div className="termsCardTitle mt-2">{item.title}</div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <TradingComponent />
        <GetStartedSec />
      </div>
    );
  }
}
