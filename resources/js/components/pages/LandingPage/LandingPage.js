import React, { Component } from "react";
import Analytics from "./components/Analytics";
import HowItWorks from "./components/HowItWorks";
import LandingSliderSection from "./components/LandingSliderSection";
import PaymentOptions from "./components/PaymentOptions";
import TradingPlatforms from "./components/TradingPlatforms";

import "./components/landingPage.css";

export default class LandingPage extends Component {
  render() {
    return (
      <>
        <LandingSliderSection />
        <HowItWorks title="HOW IT WORKS" />
        <TradingPlatforms />
        <Analytics />
        <PaymentOptions />
      </>
    );
  }
}
