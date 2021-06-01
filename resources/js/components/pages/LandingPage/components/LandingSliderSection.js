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
                    <button onClick={()=>{ window.open('https://secure.cabanacapitals.com/login/','_self')}} className="btnLogin">LOG IN</button>
                    <button onClick={()=>{ window.open('https://secure.cabanacapitals.com/register/','_self')}} className="btnSignUp">SIGN UP</button>
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
                    Seamless interest-free trading.
*Swap Free Accounts are available to all clients

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
                      No Deposit/Withdrawal Charges
                    </h2>
                    <p className="featureText">
                    ZERO deposit & withdrawal charges to earn
maximum profits at minimum trading cost

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
                    <h2 className="featureTitle">FIXED & VARIABLE SPREADS</h2>
                    <p className="featureText">
                    Offers lowest trading cost in the market (0.0 Pips)
to earn highest profits possible

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
                    <h2 className="featureTitle">LEVERAGE UPTO 1:500</h2>
                    <p className="featureText">
                    Access to a larger portion of financial market
& increase potential profits

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
                      NEGATIVE BALANCE PROTECTION
                    </h2>
                    <p className="featureText">
                    Secure trading with NBP allows you to
not lose more than deposited

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
                    Dedicated customer support team available
to assist you via various contact channels

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
                          Step-by step tutorials & articles
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
                      <button onClick={()=>{ window.open('https://secure.cabanacapitals.com/register/','_self')}} className="btnDemoAccount">
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
                      <button onClick={()=>{ window.open('https://secure.cabanacapitals.com/register/','_self')}} className="btnDemoAccount_live">
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
