import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";
export default class AboutUsBenifits extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row aboutDetailRow">
          <div className="col-md-6 col-sm-12">
            <img
              src="/assets/images/aboutUs1.png"
              className="fitImage aboutBenifitImg"
              alt="benifit Image"
            ></img>
          </div>
          <div className="col-md-6 col-sm-12">
            <h4 className="aboutDetailTitle mt-5">
              Your Benefits With Cabana Capitals
            </h4>
            <p className="aboutDetailText">
              <FontAwesomeIcon
                icon={faCheckDouble}
                size="sm"
                color="#eb1597"
                className="mr-1"
              />
              Cabana Capital has something for every kind of market. Regardless
              of whether you are a retail or institutional client, we have just
              the right trading solutions for all your needs.
            </p>
            <p className="aboutDetailText">
              <FontAwesomeIcon
                icon={faCheckDouble}
                size="sm"
                color="#eb1597"
                className="mr-1"
              />
              Choose from a wide range of markets to trade using our impressive
              trading tools and instruments. We offer a huge number of currency
              pairs, spot metals and indices, CFDs, among many others.
            </p>
            <p className="aboutDetailText">
              <FontAwesomeIcon
                icon={faCheckDouble}
                size="sm"
                color="#eb1597"
                className="mr-1"
              />
              Cabana Capital has the perfect account for every kind of trader.
              Our trading platforms are based on the latest technology to ensure
              reliability and security. We try our best to ensure they run
              smoothly on any device.
            </p>
            <p className="aboutDetailText">
              <FontAwesomeIcon
                icon={faCheckDouble}
                size="sm"
                color="#eb1597"
                className="mr-1"
              />
              To help you play an active part in your trading process, we
              provide quality and comprehensive education on the trading
              industry. You are sure to benefit greatly from this program.
            </p>
            <p className="aboutDetailText">
              <FontAwesomeIcon
                icon={faCheckDouble}
                size="sm"
                color="#eb1597"
                className="mr-1"
              />
              We also offer investment programs that can encompass traders with
              varying degrees of experience in the market.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
