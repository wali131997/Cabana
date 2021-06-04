import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default class LandingSliderSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sliderImages:[
                {image:'landingBg1.png'},
                {image:'referafriend.jpg'}
            ]
        }
    }

  render() {
    return (
      <div className="">
        <div className="">
        <div style={{paddingTop:'85px'}}>
        <Carousel
            autoPlay = {true}
            showArrows={true}
            infiniteLoop={true}
            interval={3000}
            // stopOnHover={true}
            // showThumbs={true}
            // showStatus={true}
            showIndicators={false}

            >
            {/* {
                this.state.sliderImages.map((data,index)=>{
                    return(
                        <div className="landingSliderBg" style={{backgroundImage:`url(/assets/images/${data.image})`}}>
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
                    )
                })
            } */}

                        <div className="landingSliderBg" style={{backgroundImage:`url(/assets/images/landingBg1.png`}}>
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
                        <div className="landingSliderBg" style={{backgroundImage:`url(/assets/images/referafriend.jpg`}}>
                            <div className="container">
                            <div className="row trueRow" >
                                <div className="col-12 slider_text_padding" >
                                <h1 className="trueTitle ">
                                REFER A FRIEND
                                </h1>
                                <h1 style={{fontSize:'28px'}} className="trueTitle ">
                                Earn $50 Reward
                                </h1>

                                {/* <p className="trueDescription">
                                    Reffer a friend
                                </p> */}
                                <div className="">
                                    <button onClick={()=>{ window.open('/reffer-friend','_self')}} className="light_leaarn_btn btn btn-outline-light text-light">Learn More</button>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="landingSliderBg" style={{backgroundImage:`url(/assets/images/ibreward.jpg`}}>
                            <div className="container">
                            <div className="row trueRow" >
                                <div className="col-12 slider_text_padding">
                                <h1 className="trueTitle ">
                               EXCLUSIVE IB REWARD
                                </h1>
                                <h1 style={{fontSize:'28px'}} className="trueTitle ">
                                PROGRAM
                                </h1>

                                {/* <p className="trueDescription">
                                    Reffer a friend
                                </p> */}
                               <div className="">
                                    <button onClick={()=>{ window.open('/introducing-broker','_self')}} className="light_leaarn_btn btn btn-outline-light text-light">Learn More</button>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>

        </Carousel>

        </div>

          <div className="landingSliderBg2">
            <div className="container-fluid">
              <div className="row tradeWithRow">
                <div className="col-12">
                  <h3 className="tradeWithTitle">WHY TRADE WITH CABANA</h3>
                  <p className="tradeWithText">
                  Trade multiple financial products which includes Forex, Commodities, Indices, and Metals
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
                    <h2 className="featureTitle">Swap Free <br/>Account</h2>
                    <p className="featureText">
                    Seamless interest-free trading.
*Swap Free Accounts are available to all our clients

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
                    <h2 className="featureTitle">FIXED &  <br/> VARIABLE SPREADS</h2>
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
                    <h2 className="featureTitle">LEVERAGE UPTO  <br/> 1:500</h2>
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
                  <div className="demoAccountBox mr-0">
                    <div className="demoAccountTitleBox">
                    <h2
                        className="demoAccountTitle"
                        style={{ color: "orange" }}
                      >
                        NEW TO TRADING?
                      </h2>
                    </div>

                    <div className="demoAccountInfoBox ">
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
                  <div className="demoAccountBox ml-0">
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
