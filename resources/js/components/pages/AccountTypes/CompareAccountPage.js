import React, { Component } from "react";
import HeroSection from "../AboutUsPage/components/HeroSection";
import CompareAccoountHeader from "./components/compareAccoountHeader";
import "./components/compareAccount.css";
import CompareAccountStandard from "./components/CampareAccountStandard";
import CompareAccountEcn from "./components/CompareAccountEcn";
import CompareAccountStandardM from "./components/CompareAccountStandardM";
import CompareAccountEcnM from "./components/CompareAccountEcnM"
export default class CompareAccountPage extends Component {
  constructor() {
    super();
    // state
    this.state = {
      active: true,
    };
  }

  // handle active fun
  handleActiveFun () {
    this.setState({
      active: !this.state.active,
    });
  };

  render() {
    const { active } = this.state;
    return (
      <div>
        <HeroSection title="COMPARE ACCOUNTS"
        bg="accounttypes.jpg"
        />
        <div className="container">
          <div className="row compareAccountRow">
            <CompareAccoountHeader
              active={active}
              handleActiveFun={this.handleActiveFun.bind(this)}
            />
          </div>

          {active===true?

          <><div
            className="row compareAccountRow d-none d-md-flex"
          >
            <CompareAccountStandard />
          </div>


          <div className="row compareAccountRowM d-md-none">
            <CompareAccountStandardM/></div> </>:<>

             <div
            className="row compareAccountRow d-none d-md-flex"
          >

            <CompareAccountEcn />
          </div>
          <div className="row compareAccountRowM d-md-none">
            <CompareAccountEcnM/>
            </div>

          </>}


        </div>
      </div>
    );
  }
}
