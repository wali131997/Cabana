import React, { Component } from "react";
import HeroSection from "../AboutUsPage/components/HeroSection";
import DepositeTable from "./components/DepositeTable";
import "./components/depositeWithdraw.css";
import StepsToOpenAccount from "./components/StepsToOpenAccount";
export default class DepositWithdrawPage extends Component {

  constructor(){
    super()
    this.state={active:true}
  }

  // handle change
  handleChangeFun(){
    this.setState({
      active:!this.state.active
    })
  }
  render() {
    const {active}=this.state
    return (
      <div>
        <HeroSection
          title="DEPOSIT/WITHDRAWAL"
          text="List of Deposit and Withdrawl Method by Cabana Capitals"
        />
<div className="pt-4 depositToggle">

  <div className="outerDiv" onClick={this.handleChangeFun.bind(this)}>
    <div className={active===true? "innerDivActive borderRight" :"innerDivActive innerDiv"}>Deposit</div>
    <div className={active===false? "innerDivActive borderLeft" :" innerDivActive innerDiv"}>Withdrawl</div>
  </div>
</div>
    <DepositeTable/>

    <div
    className="depositTrading">
      <div className="basicRow text-center w-100">

        <div className="title">Trading Platform</div>
        <div>
          <hr className="depositDivider" />
          <div className="depositeDividerOverlay"></div>
        </div>
        <img src="/assets/images/tradingPlatform2.png" alt="deposit trading" className="Img mt-5" ></img>
        <p className="text">Trade Currencies, Gold, Crude Oil, and more using MetaTrader4, the worlds most reliable Trading Platform<br/>
Trade the markets from Any Desktop, Android and IOS. Carry</p>
        <div className="">
          <button className="depositButton mr-0 mr-md-5 mb-3 mb-md-0">Open Live Account</button>
          <button className="depositButton">Open Demo Account</button>
        </div>
      </div>
      
    </div >

    <StepsToOpenAccount />

      </div>
    );
  }
}
