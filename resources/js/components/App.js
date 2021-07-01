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
import PreciousMetals from "./pages/TradingInstrumentsPages/Preciousmetals";
import CFDincidies from "./pages/TradingInstrumentsPages/Cfdincidies";

import Commodities from "./pages/TradingInstrumentsPages/Comodities";


import EducationsMetaTrader4 from "./pages/EducationPage/EducationsMetaTrader4";
import PatnershipPage from "./pages/Patnership&Promotion/PatnershipPage";
import NegativeBalanceProtection from "./pages/Patnership&Promotion/NegitiveBlanaceProtection";


import PromotionPage from "./pages/Patnership&Promotion/PromotionPage";
import Refferafriend from "./pages/Patnership&Promotion/RefferaFriend";


import PlatformMT5 from "./pages/PlatformPage/PlatformMT5";
import PAMMpage from "./pages/PAMM/PAMMpage";
import DepositWithdrawPage from "./pages/Deposit&WithdrawPage/DepositWithdrawPage";
import HeaderMobile from "./HeaderMobile";
import './Front.css';
import AboutUsPage2 from "./pages/AboutUsPage2/AboutUsPage2";
import OurLocationPage from "./pages/OurLocationPage/OurLocationPage";
import CookiePolicy from "./pages/FooterLinkPages/CookiePolicy";
import CompliancePage from "./pages/OurLocationPage/CompliancePage";
import PrivacyPolicy from "./pages/FooterLinkPages/PrivacyPolicy";
import RiskPage from "./pages/FooterLinkPages/RiskPage";
import NewPromo35PerB from "./pages/NewPromoPages/NewPromo35PerB";
import SafetyOfFunds from "./pages/FooterLinkPages/SafetyOfFunds";
import Affiliyate from "./pages/Patnership&Promotion/Affiliyate";
import Mt4 from './pages/PlatformPage/Mt4';
import Mt5 from './pages/PlatformPage/Mt5';
import WhiteLABEL from "./pages/Patnership&Promotion/WhiteLabbel";
import SocialTrading from "./pages/Patnership&Promotion/SocialTrading";
import Islamic from "./pages/Patnership&Promotion/Islamic";
import Termonology from "./pages/Patnership&Promotion/Termonology";
import Faq from "./pages/Faqs/Faqs";
import ProtectionofFunds from "./pages/TradingInstrumentsPages/ProtectionofFunds";
import TraidingMemory from "./pages/PAMM/TraidingMemory";

 class App extends Component {
  // state
  constructor(props) {
    super(props);
    this.state = { sideBar: false };
    console.log(this.props)
  }

// componentDidMount(){
//     this.props.history.listen((location, action) => {
//         // location is an object like window.location
//         console.log(action, location.pathname, location.state)
//     });
// }
  componentDidUpdate(prevProps) {
      console.log("ddd");
    if (this.props.location !== prevProps.location) {
        console.log("dfdd");

     window.scrollTo(0,0);
    }
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
          <Route path="/affiliate-program" component={Affiliyate}></Route>
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
          <Route path="/introducing-broker" component={PatnershipPage}></Route>
          <Route path="/negative-balance-protection" component={NegativeBalanceProtection}></Route>
          <Route path="/reffer-friend" component={Refferafriend}></Route>
          <Route path="/trading-memory/:id" component={TraidingMemory}></Route>

          <Route path="/white-label" component={WhiteLABEL}></Route>
          <Route path="/social-trading" component={SocialTrading}></Route>
          <Route path="/islamic-trading" component={Islamic}></Route>
          <Route path="/trading-termonology" component={Termonology}></Route>
          <Route path="/precious-metals" component={PreciousMetals}></Route>
          <Route path="/cfd-incdices" component={CFDincidies}></Route>
          <Route path="/comodoties" component={Commodities}></Route>
          <Route path="/faqs" component={Faq}></Route>
          <Route path="/protection-funds" component={ProtectionofFunds}></Route>

          <Route path="/mt4-platform" component={Mt4}></Route>
          <Route path="/mt5-platform" component={Mt5}></Route>
          <Route path="/promotion"  component={PromotionPage}></Route>
          <Route path="/newPromotion" component={NewPromo35PerB}></Route>
          <Route path="/platform/mt5" component={PlatformMT5}></Route>
          <Route path="/PAMM" component={PAMMpage}></Route>
          <Route path="/our-location" component={OurLocationPage}></Route>
          <Route path="/cookie-policy" component={CookiePolicy}></Route>
          <Route path="/regulatory-compliance" component={CompliancePage}></Route>
          <Route path="/privacy-policy" component={PrivacyPolicy}></Route>
          <Route path="/risk-disclouser" component={RiskPage}></Route>
          <Route path="/instruction-security" component={SafetyOfFunds}></Route>
          <Route path="/terms-and-condition" component={TermsAndCondition}></Route>
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

