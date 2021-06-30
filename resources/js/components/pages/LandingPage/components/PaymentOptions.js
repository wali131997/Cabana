import React, { Component } from "react";

export default class PaymentOptions extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row paymentRow">
          <div className="col-md-4 col-sm-12">
            <h2 className="titleFont text-center mt-4">
              PAYMENT
              OPTIONS
            </h2>
          </div>
          <div className="col-md-8 col-sm-12">
            <div className=" row paymentFlex">
              <div className=" ">
                <img
                  className="fitImage paymentImage"
                  src="/assets/images/payment1.png"
                  alt="paymentImage"
                ></img>
              </div>
              <div className=" ">
                <img
                  className="fitImage paymentImage"
                  src="/assets/images/payment2.png"
                  alt="paymentImage"
                ></img>
              </div>
              <div className=" ">
                <img
                  className="fitImage paymentImage"
                  src="/assets/images/payment3.png"
                  alt="paymentImage"
                ></img>
              </div>
              <div className=" ">
                <img
                  className="fitImage paymentImage"
                  src="/assets/images/payment4.png"
                  alt="paymentImage"
                ></img>
              </div>
              <div className=" ">
                <img
                  className="fitImage paymentImage"
                  src="/assets/images/payment5.png"
                  alt="paymentImage"
                ></img>
              </div>
              <div className=" ">
                <img
                  className="fitImage paymentImage"
                  src="/assets/images/payment6.png"
                  alt="paymentImage"
                ></img>
              </div>
              <div className=" ">
                <img
                  className="fitImage paymentImage"
                  src="/assets/images/payment7.png"
                  alt="paymentImage"
                ></img>
              </div>
              <div className=" ">
                <img
                  className="fitImage paymentImage"
                  src="/assets/images/localbank.png"
                  alt="paymentImage"
                ></img>
              </div>
              <div className=" ">
                <img
                  className="fitImage paymentImage"
                  src="/assets/images/paytrust.png"
                  alt="paymentImage"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
