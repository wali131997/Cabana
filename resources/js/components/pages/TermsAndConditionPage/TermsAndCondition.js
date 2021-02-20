import React, { Component } from "react";
import HeroSection from "../AboutUsPage/components/HeroSection";
import TradingComponent from "../LandingPage/components/TradingComponent";
import GetStartedSec from "./components/GetStartedSec";
import "./components/termsAndCondition.css";
import TermsCard from "./components/TermsCard";

export default class TermsAndCondition extends Component {
  render() {
    return (
      <div>
        <HeroSection
          title="TRADING TERMS"
          text="Read it carefully"
        ></HeroSection>
        <TermsCard />
        <TradingComponent />
        <GetStartedSec />
      </div>
    );
  }
}
