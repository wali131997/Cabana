import React, { Component } from "react";

export default class pammDetail extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row basicRow">
            <div className="col-12 text-center mb-5">
              <h4 className="aboutDetailTitle">PAMM Trading Benefits</h4>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="missionCard mb-3">
                <div className="missionCircle">
                  <img
                    className="missionImg"
                    alt="mission img"
                    src="/assets/images/an-expert-eye.png"
                  ></img>
                </div>
                <h5 className="missionTitle mt-2">AN EXPERT EYE</h5>
                <p className="missionText">
                  Select Expert traders let them plan, execute monitor
                  performance.
                </p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="missionCard mb-3">
                <div className="missionCircle">
                  <img
                    className="missionImg"
                    alt="mission img"
                    src="/assets/images/complete-visibility.png"
                  ></img>
                </div>
                <h5 className="missionTitle mt-2">COMPLETE VISIBILITY</h5>
                <p className="missionText">
                  Automatic fund performance updates, keeps you informed.
                </p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="missionCard mb-3">
                <div className="missionCircle">
                  <img
                    className="missionImg"
                    src="/assets/images/maximum-control.png"
                    alt="mission img"
                  ></img>
                </div>
                <h5 className="missionTitle mt-2">MAXIMUM CONTROL</h5>
                <p className="missionText">
                  Feel free to add, transfer and withdraw your funds anytime.
                </p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="missionCard mb-3">
                <div className="missionCircle">
                  <img
                    className="missionImg"
                    src="/assets/images/no-hidden-fees.png"
                    alt="mission img"
                  ></img>
                </div>
                <h5 className="missionTitle mt-2">NO HIDDEN FEES</h5>
                <p className="missionText">
                  Pay pre-agreed performance fees only when your Strategy
                  Manager makes a profit for you.
                </p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="missionCard mb-3">
                <div className="missionCircle">
                  <img
                    className="missionImg"
                    src="/assets/images/vary-your-investments.png"
                    alt="mission img"
                  ></img>
                </div>
                <h5 className="missionTitle mt-2">VARY YOUR INVESTMENTS</h5>
                <p className="missionText">
                  No need to invest huge amounts; diversify your funds with many
                  managers.
                </p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="missionCard mb-3">
                <div className="missionCircle">
                  <img
                    className="missionImg"
                    src="/assets/images/transparent-profit-sharing.png"
                    alt="mission img"
                  ></img>
                </div>
                <h5 className="missionTitle mt-2">
                  TRANSPARENT PROFIT SHARING
                </h5>
                <p className="missionText">
                  As a broker we are required to disclose everything.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="greyBg">
          <div className=" basicRow text-center ">
            <h4 className="aboutDetailTitle mt-4 mb-5">
              How to become PAMM Investor ?
            </h4>

            <div className="pammFlex">
              <div className="pammCard">
                <img
                  className="pammImage"
                  alt="pamm img"
                  src="/assets/images/1.png"
                />
                <h5 className="missionTitle mt-2">Open an Trading Account</h5>
              </div>
              <div className="pammCard">
                <img
                  className="pammImage"
                  alt="pamm img"
                  src="/assets/images/2.png"
                />
                <h5 className="missionTitle mt-2">Fund Your Trading Account</h5>
              </div>
              <div className="pammCard">
                <img
                  className="pammImage"
                  alt="pamm img"
                  src="/assets/images/3.png"
                />
                <h5 className="missionTitle mt-2">
                  Select PAMM Account Manager of your choice
                </h5>
              </div>
              <div className="pammCard">
                <img
                  className="pammImage"
                  alt="pamm img"
                  src="/assets/images/4.png"
                />
                <h5 className="missionTitle mt-2">
                  Agree to terms,Risks & Fee of PAMM Manager & Monitor
                </h5>
              </div>
              <div className="pammCard">
                <img
                  className="pammImage"
                  alt="pamm img"
                  src="/assets/images/5.png"
                />
                <h5 className="missionTitle mt-2">
                  You Can withdraw your money anytime
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
