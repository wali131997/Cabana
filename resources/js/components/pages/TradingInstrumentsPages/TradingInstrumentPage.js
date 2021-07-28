import React, { Component } from "react";
import HeroSec2 from "./components/HeroSec2";
import { Link } from "react-router-dom";
import "./components/tradingInstruments.css";
import TradingInstrumentComponent from "./components/TradingInstrumentComponent";
import StepsToOpenAccount from "../Deposit&WithdrawPage/components/StepsToOpenAccount"
import Analyticstable from "../LandingPage/components/Analyticstable"
export default class TradingInstrumentPage extends Component {
  render() {
    const analyticData= [
      {
        time: "2:30",
        currency: "NZD",
        event: "BuisnessNZ Services Index",
        eventColor: "yellow",
        actualColor: "green",
        actual: "8.63%",
        forcast: "8.63%",
        previous: "2.9%",
      },
      {
        time: "4:50",
        currency: "JPY",
        event: "Adjusted Trade Balance",
        eventColor: "green",
        actualColor: "green",
        actual: "12.51%",
        forcast: "12.51%",
        previous: "8.18%",
      },
      {
        time: "4:50",
        currency: "JPY",
        event: "Trade Balance",
        eventColor: "grey",
        actualColor: "red",
        actual: "-2.14%",
        forcast: "-2.14%",
        previous: "-0.79%",
      },
    ]
    return (
      <div>
        <HeroSec2
          title="TRADE THE WORLD'S MARKETS"
          text="We offer to a wide range of asset classes, including"
          text2="FX, precious metals and indices"
          bg="tradinginstrumenbanner.jpg"
        />
        <TradingInstrumentComponent />
        <StepsToOpenAccount />
        {/* <Analyticstable Data={analyticData} />
        <div className="mb-5"></div> */}
      </div>
    );
  }
}
