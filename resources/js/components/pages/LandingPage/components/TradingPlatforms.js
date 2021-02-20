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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat
                    <br />
                    nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
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
