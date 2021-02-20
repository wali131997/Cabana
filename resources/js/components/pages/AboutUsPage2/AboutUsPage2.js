import React, { Component } from 'react';
import IntroSec from "./components/IntroSec";
import "./components/aboutUs2.css"
import "./components/aboutUs.css"
import AboutUsCounterSec from './components/AboutUsCounterSec';
import AboutUsGrowthSec from './AboutUsGrowthSec';
import GuideSec from './components/GuideSec';
import TradingPlatformNew from './components/TradingPlatformNew';
import TradeWithCabana from './components/TradeWithCabana';

class AboutUsPage2 extends Component {
    render() {
        return (
            <div>
               <IntroSec/>
               <AboutUsCounterSec/>
               <AboutUsGrowthSec/>
               <TradeWithCabana />
               <GuideSec />
               <TradingPlatformNew />
            </div>
        );
    }
}

export default AboutUsPage2;