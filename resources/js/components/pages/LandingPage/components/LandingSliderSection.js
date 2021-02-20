import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
export default class LandingSliderSection extends Component {
  render() {
    return (
      <div className="">
        <div className="">
          <div className="landingSliderBg">
            <div className="container">
              <div className="row trueRow">
                <div className="col-12">
                  <h1 className="trueTitle">
                    TRUE ECN <br /> FOREX BROKER
                  </h1>
                  <p className="trueDescription">
                    True ECN Spreads From 0.0 Pips
                  </p>
                  <div className="trueButtonBox">
                    <button className="btnLogin">LOG IN</button>
                    <button className="btnSignUp">SIGN UP</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="landingSliderBg2">
            <div className="container-fluid">
              <div className="row tradeWithRow">
                <div className="col-12">
                  <h3 className="tradeWithTitle">WHY TRADE WITH CABANA</h3>
                  <p className="tradeWithText">
                  Trade more than 250 products including Forex, Commodities, Indices, and Metals with Cabana Capitals.
                  </p>
                </div>
              </div>
            </div>
            <div className="container-fluid">
              <div className="row tradeWithFRow">
                <div className="col-lg-2 col-md-4 col-sm-6">
                  <div className="tradeFeatureBox">
                    <div className="featureImageCircle">
                      <img
                        className="featureImage"
                        alt="featureImage"
                        src="/assets/images/fKey.png"
                      ></img>
                    </div>
                    <h2 className="featureTitle">Swap Free Account</h2>
                    <p className="featureText">
                      open swap free account and enjoy hassel free trading
                    </p>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6">
                  <div className="tradeFeatureBox">
                    <div className="featureImageCircle">
                      <img
                        className="featureImage"
                        alt="featureImage"
                        src="/assets/images/fCharges.png"
                      ></img>
                    </div>
                    <h2 className="featureTitle">
                      No Deposite/Withdrawl Charges
                    </h2>
                    <p className="featureText">
                      open swap free account and enjoy hassel free trading
                    </p>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6">
                  <div className="tradeFeatureBox">
                    <div className="featureImageCircle">
                      <img
                        className="featureImage"
                        alt="featureImage"
                        src="/assets/images/fFixed.png"
                      ></img>
                    </div>
                    <h2 className="featureTitle">FIXED & VAIRIABLE SPREADS</h2>
                    <p className="featureText">
                      open swap free account and enjoy hassel free trading
                    </p>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6">
                  <div className="tradeFeatureBox">
                    <div className="featureImageCircle">
                      <img
                        className="featureImage"
                        alt="featureImage"
                        src="/assets/images/fLeverage.png"
                      ></img>
                    </div>
                    <h2 className="featureTitle">LEAVRAGE UPTO 1:500</h2>
                    <p className="featureText">
                      open swap free account and enjoy hassel free trading
                    </p>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6">
                  <div className="tradeFeatureBox">
                    <div className="featureImageCircle">
                      <img
                        className="featureImage"
                        alt="featureImage"
                        src="/assets/images/fBalance.png"
                      ></img>
                    </div>
                    <h2 className="featureTitle">
                      NEGETIVE BALANCE PROTECTION
                    </h2>
                    <p className="featureText">
                      open swap free account and enjoy hassel free trading
                    </p>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6">
                  <div className="tradeFeatureBox">
                    <div className="featureImageCircle">
                      <img
                        className="featureImage"
                        alt="featureImage"
                        src="/assets/images/fService.png"
                      ></img>
                    </div>
                    <h2 className="featureTitle">
                      24/5 MULTILINGUAL <br /> SERVICE
                    </h2>
                    <p className="featureText">
                      open swap free account and enjoy hassel free trading
                    </p>
                  </div>
                </div>
              </div>

              <div className="row demoAccountRow">
              <div className="col-md-6 col-sm-12">
                  <div className="demoAccountBox">
                    <div className="demoAccountTitleBox">
                    <h2
                        className="demoAccountTitle"
                        style={{ color: "orange" }}
                      >
                        NEW TO TRADING?
                      </h2>
                    </div>

                    <div className="demoAccountInfoBox">
                      <div className="demoTextFlex mt-2">
                        <h4 className="demoAccountText ">FREE Demo Account</h4>
                        <div className="demoIcon">
                          <FontAwesomeIcon
                            icon={faCheckCircle}
                            size="sm"
                            color="#F1A101"
                          />
                        </div>
                      </div>
                      <div className="demoTextFlex mt-2">
                        <h4 className="demoAccountText ">
                          Step-by step tutorials & articales
                        </h4>
                        <div className="demoIcon ">
                          <FontAwesomeIcon
                            icon={faCheckCircle}
                            size="sm"
                            color="#F1A101"
                          />
                        </div>
                      </div>
                      <div className="demoTextFlex mt-2">
                        <h4 className="demoAccountText ">
                          Online webinars & local seminars
                        </h4>
                        <div className="demoIcon ">
                          <FontAwesomeIcon
                            icon={faCheckCircle}
                            size="sm"
                            color="#F1A101"
                          />
                        </div>
                      </div>
                      <div className="demoTextFlex mt-2">
                        <h4 className="demoAccountText ">
                          Your own Account Manager
                        </h4>
                        <div className="">
                          <FontAwesomeIcon
                            icon={faCheckCircle}
                            size="sm"
                            color="#F1A101"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <button className="btnDemoAccount">
                       Open Demo Account
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="demoAccountBox">
                    <div className="demoAccountTitleBox">
                    <h2 className="demoAccountTitle">GO LIVE</h2>
                      
                    </div>

                    <div className="demoAccountInfoBox">
                      <div className="demoTextFlex mt-2">
                        <h4 className="demoAccountText ">Tight Spreads</h4>
                        <div className="demoIcon">
                          <FontAwesomeIcon
                            icon={faCheckCircle}
                            size="sm"
                            color="#6ddf65"
                          />
                        </div>
                      </div>
                      <div className="demoTextFlex mt-2">
                        <h4 className="demoAccountText ">
                          Superfast trade execution
                        </h4>
                        <div className="demoIcon ">
                          <FontAwesomeIcon
                            icon={faCheckCircle}
                            size="sm"
                            color="#6ddf65"
                          />
                        </div>
                      </div>
                      <div className="demoTextFlex mt-2">
                        <h4 className="demoAccountText ">
                          Hi-tech forex trading tools
                        </h4>
                        <div className="demoIcon ">
                          <FontAwesomeIcon
                            icon={faCheckCircle}
                            size="sm"
                            color="#6ddf65"
                          />
                        </div>
                      </div>
                      <div className="demoTextFlex mt-2">
                        <h4 className="demoAccountText ">
                          Ultimate risk protection & security
                        </h4>
                        <div className="">
                          <FontAwesomeIcon
                            icon={faCheckCircle}
                            size="sm"
                            color="#6ddf65"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <button className="btnDemoAccount_live">
                        OPEN LIVE ACCOUNT
                      </button>
                    </div>
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
