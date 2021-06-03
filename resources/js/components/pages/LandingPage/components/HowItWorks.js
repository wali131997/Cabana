import React, { Component } from "react";

export default class HowItWorks extends Component {
  render() {
    return (
      <div className="container-fluid howitworkmain">
        <div className="row howItTitleBox">
          <div className="col-12 mt-3">
            <h2 className="howItTitle">HOW IT WORKS</h2>
            <p className="howItText">
              Step-by step guide on how to Create Account and start working with
              Cabana Capitals
            </p>
          </div>
        </div>
        <div className="row howItFeatureRow">
          <div className="col-md-5 col-sm-12">
            <div className="row howPointsRow">
              <div className="col-4">
                <div className="howPointsShape">
                  <img
                    className="howPointImage"
                    src="/assets/images/howPoint1.png"
                    alt="howPointsImage"
                  ></img>
                </div>
              </div>
              <div className="col-8">
                <h2 className="howPointTitle">CREATE ACCOUNT</h2>
                <p className="howItText">
                Sign up and open your live trading account
                </p>
              </div>
            </div>
            <div className="row howPointsRow">
              <div className="col-4">
                <div className="howPointsShape">
                  <img
                    className="howPointImage"
                    src="/assets/images/howPoint2.png"
                    alt="howPointsImage"
                  ></img>
                </div>
              </div>
              <div className="col-8">
                <h2 className="howPointTitle">VERIFY</h2>
                <p className="howItText">
                Upload your documents to verify your accountwith Cabana Capitals and enjoys hassel
                  free forex trading
                </p>
              </div>
            </div>
            <div className="row howPointsRow">
              <div className="col-4">
                <div className="howPointsShape">
                  <img
                    className="howPointImage"
                    src="/assets/images/howPoint3.png"
                    alt="howPointsImage"
                  ></img>
                </div>
              </div>
              <div className="col-8">
                <h2 className="howPointTitle">FUNDS</h2>
                <p className="howItText">
                Login to Cabana Capitals &fund your account
                </p>
              </div>
            </div>
            <div className="row howPointsRow">
              <div className="col-4">
                <div className="howPointsShape">
                  <img
                    className="howPointImage"
                    src="/assets/images/howPoint4.png"
                    alt="howPointsImage"
                  ></img>
                </div>
              </div>
              <div className="col-8">
                <h2 className="howPointTitle">TRADE</h2>
                <p className="howItText">
                Enjoy hassle free trading on more than 250 instruments
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-7 col-sm-12">
            <img
              className="howItFeatureImage"
              alt="image"
              src="/assets/images/howItWorks.png"
            ></img>
          </div>
        </div>
      </div>
    );
  }
}
