import React, { Component } from "react";
import TradingComponent from "./TradingComponent";

export default class TradingPlatforms extends Component {
  render() {
    return (
      <div>
        <div>
          <TradingComponent />
          <div className="tradingBg2">
            <div className="container-fluid">
              <div className="row eduVideoRow">
                <div className="col-md-6 col-sm-12">
                  <img
                    src="/assets/images/eduVideoImage.png"
                    alt="eduImage"
                    className="eduVideoImage"
                  ></img>
                </div>
                <div className="col-md-6 col-sm-12">
                  <h2 className="titleFont pt-4">EDUCATIONAL VIDEOS</h2>
                  <p className="textFont mt-2">
                  Forex trading for beginners can be especially tough. Therefore, we are providing a set of our educational videos to learn Forex Trading visually & comprehensively. The videos provide a full set of tutorials to understand all ins and outs of currency trading; for all levels from beginners to advance.Learn about key Forex, trading and technical analysis concepts with our short and easy-to-understand educational videos
                  </p>
                  <button className="btnPrimaryPink">LEARN MORE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="patnershipBg">
          <div className="container-fluid ">
            <div className="row patnershipRow">
              <div className="col-md-6 col-sm-12 ">
                <div className="patnershipCol">
                  <h2 className="patnershipTitle">
                    CABANA PARTNERSHIP PROGRAMS
                  </h2>
                  <p className="patnershipText">
                    Benifits from forex market potentials and our unique
                    Patnership Programs.
                    <br />
                    Enjoy high commision and continuous support to grow your
                    business
                  </p>
                  <div className="row patnershipPointRow">
                    <div className="">
                      <div className="patnershipPoint activePatnership">
                        <div className="patnershipPointText">
                          INTRODUCING BROKER
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <div className="patnershipPoint">
                        <div className="patnershipPointText">
                          AFFILATE PROGRAMS
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <div className="patnershipPoint">
                        <div className="patnershipPointText">WHITE LABEL</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <img
                  className="patnerShipImage"
                  src="/assets/images/patnershipImage.png"
                  alt="imagePatner"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
