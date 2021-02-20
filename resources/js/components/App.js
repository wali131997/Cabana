import React, { Component } from "react";
import {BrowserRouter, Route, Switch } from "react-router-dom";
import AffixBar from "./AffixBar";
import LandingPage from "./pages/LandingPage/LandingPage";
import Header from "./Header";
import Footer from "./Footer";

import TermsAndCondition from "./pages/TermsAndConditionPage/TermsAndCondition";
import AccountTypes from "./pages/AccountTypes/CompareAccountPage";
import MissionAndValues from "./pages/MissionAndValues/MissionAndValues";
import EducationPage from "./pages/EducationPage/EducationPage";
import TradingInstrumentPage from "./pages/TradingInstrumentsPages/TradingInstrumentPage";
import TradingCurrencisePage from "./pages/TradingInstrumentsPages/TradingCurrencisePage";
import EducationsMetaTrader4 from "./pages/EducationPage/EducationsMetaTrader4";
import PatnershipPage from "./pages/Patnership&Promotion/PatnershipPage";
import PromotionPage from "./pages/Patnership&Promotion/PromotionPage";
import PlatformMT5 from "./pages/PlatformPage/PlatformMT5";
import PAMMpage from "./pages/PAMM/PAMMpage";
import DepositWithdrawPage from "./pages/Deposit&WithdrawPage/DepositWithdrawPage";
import HeaderMobile from "./HeaderMobile";
import './Front.css';
import AboutUsPage2 from "./pages/AboutUsPage2/AboutUsPage2";
 class App extends Component {
  // state
  constructor(props) {
    super(props);
    this.state = { sideBar: false };
  }
  
  
  // handle sideBar

  handleSideBar  ()  {
    this.setState(
      {
        sideBar: !this.state.sideBar,
      },
      
    );
  };

  render() {
    return (
      <div >
       
        <BrowserRouter>
       
        <AffixBar />
        <Header handleSideBar={this.handleSideBar.bind(this)} />
        <HeaderMobile
          active={this.state.sideBar}
          closeHeader={this.handleSideBar.bind(this)}
        />
  
          <Route path="/" exact component={LandingPage}></Route>
          
          <Route path="/about-us" component={AboutUsPage2}></Route>
          <Route path="/trading-terms" component={TermsAndCondition}></Route>
          <Route path="/account-type" component={AccountTypes}></Route>
          
          <Route
            path="/mission-and-values"
            component={MissionAndValues}
          ></Route>
          <Route path="/education" exact component={EducationPage}></Route>
          <Route
            path="/education/meta-trader-4"
            component={EducationsMetaTrader4}
          ></Route>
          <Route
            path="/trading-instruments"
            component={TradingInstrumentPage}
          ></Route>
          <Route
            path="/trading-currencies"
            component={TradingCurrencisePage}
          ></Route>
          <Route path="/patnership" component={PatnershipPage}></Route>
          <Route path="/promotion" component={PromotionPage}></Route>
          <Route path="/platform/mt5" component={PlatformMT5}></Route>
          <Route path="/PAMM" component={PAMMpage}></Route>
          <Route
            path="/deposite-withdraw"
            component={DepositWithdrawPage}
          ></Route>
     
        <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

