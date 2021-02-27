import {
  faAngleRight,
  faArrowLeft,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import HeaderMobileLastDropDown from "./HeaderComp/HeaderMobileLastDropDown";

export default class HeaderMobile extends Component {
  // state
  constructor(props) {
    super(props);
    this.state = { activeDropDown: null };
    
  }
  

  // handleChange drop down fun
  handleChangeDropDown  (value) {
    console.log(value);
    this.setState({
      activeDropDown: value,
    });
  };
  render() {
    return (
      <>
        <div
          className={
            this.props.active
              ? "headerMobile headerMobileActive"
              : "headerMobile"
          }
        >
          <div className="sideBarHead">
            <span>
              {this.state.activeDropDown && (
                <div onClick={() => this.handleChangeDropDown(null)}>
                  <FontAwesomeIcon
                    className="pointer"
                    icon={faArrowLeft}
                    color="#fff"
                    size="lg"
                  />
                </div>
              )}
            </span>
            <FontAwesomeIcon
              onClick={this.props.closeHeader}
              className="pointer"
              icon={faTimes}
              color="#fff"
              size="lg"
            ></FontAwesomeIcon>
          </div>
          <div
            className={
              this.state.activeDropDown
                ? "sideBarBody activeDropDown"
                : "sideBarBody"
            }
          >
            <div
              className="sideBarItem"
              onClick={() => {
                console.log("click")
                this.handleChangeDropDown("accounts")}}
            >
              <span> FX TRADING</span>
              <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
            </div>
            <div
              className="sideBarItem"
              onClick={() => this.handleChangeDropDown("payment")}
            >
              <span> TRADING INSTRUMENTS</span>
              <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
            </div>
            
            <div
              className="sideBarItem"
              onClick={() => this.handleChangeDropDown("promotion")}
            >
              <span>NEW PROMOTIONS</span>
              <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
            </div>

            <div
              className="sideBarItem"
              onClick={() => this.handleChangeDropDown("analytic")}
            >
              <span> REFERAL PROGRAM</span>
              <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
            </div>
            <div
              className="sideBarItem"
              onClick={() => this.handleChangeDropDown("pamm")}
            >
              <span> ANALYSIS & EDUCATION</span>
              <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
            </div>
            <div
              className="sideBarItem"
              onClick={() => this.handleChangeDropDown("aboutUs")}
            >
              <span> SOCIAL TRADING</span>
              <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
            </div>
          </div>

          {this.state.activeDropDown && (
            <div
              className="sideBarDropDown"
              onClick={() => {
                // this.handleChangeDropDown(null);
                // this.props.closeHeader();
                // return;
              }}
            >
              {this.state.activeDropDown === "accounts" && (
                <>
                  <HeaderMobileLastDropDown title="ACCOUNTS">
                    <div
                      onClick={() => {
                        this.handleChangeDropDown(null);
                        this.props.closeHeader();
                        return;
                      }}
                    >
                      <Link to="/account-type">
                        <div className="sideBarItem">
                          <span> Account Type</span>
                        </div>
                      </Link>
                      <Link to="/trading-instruments">
                        <div className="sideBarItem">
                          <span> Trading Instruments</span>
                        </div>
                      </Link>
                      <Link to="/platform/mt5">
                        <div className="sideBarItem">
                          <span> Trading Platform</span>
                        </div>
                      </Link>
                      <Link to="/trading-currencies">
                        <div className="sideBarItem">
                          <span> Currencies (Fx)</span>
                        </div>
                      </Link>
                    </div>
                  </HeaderMobileLastDropDown>
                </>
              )}
              {this.state.activeDropDown === "payment" && (
                <>
                  <HeaderMobileLastDropDown title="Payment">
                    <div
                      onClick={() => {
                        this.handleChangeDropDown(null);
                        this.props.closeHeader();
                        return;
                      }}
                    >
                      <Link to="/deposite-withdraw">
                        <div className="sideBarItem">
                          <span> Deposit/WithDrawal</span>
                        </div>
                      </Link>
                    </div>
                  </HeaderMobileLastDropDown>
                </>
              )}
              {this.state.activeDropDown === "platform" && (
                <>
                  <HeaderMobileLastDropDown title="Platform">
                    <div
                      onClick={() => {
                        this.handleChangeDropDown(null);
                        this.props.closeHeader();
                        return;
                      }}
                    >
                      <Link to="/platform/mt5">
                        <div className="sideBarItem">
                          <span> MT5 Client Desktop</span>
                        </div>
                      </Link>
                    </div>
                  </HeaderMobileLastDropDown>
                </>
              )}
              {this.state.activeDropDown === "promotion" && (
                <>
                  <HeaderMobileLastDropDown title="Promotion">
                    <div
                      onClick={() => {
                        this.handleChangeDropDown(null);
                        this.props.closeHeader();
                        return;
                      }}
                    >
                      <Link to="/promotion">
                        <div className="sideBarItem">
                          <span> Promotion</span>
                        </div>
                      </Link>
                    </div>
                  </HeaderMobileLastDropDown>
                  <HeaderMobileLastDropDown title="Patnership">
                    <div
                      onClick={() => {
                        this.handleChangeDropDown(null);
                        this.props.closeHeader();
                        return;
                      }}
                    >
                      <Link to="/patnership">
                        <div className="sideBarItem">
                          <span> Patnership</span>
                        </div>
                      </Link>
                    </div>
                  </HeaderMobileLastDropDown>
                </>
              )}
              {this.state.activeDropDown === "analytic" && (
                <>
                  <HeaderMobileLastDropDown title="Analytics">
                    <div
                      onClick={() => {
                        this.handleChangeDropDown(null);
                        this.props.closeHeader();
                        return;
                      }}
                    >
                      <Link to="/education">
                        <div className="sideBarItem">
                          <span> Education</span>
                        </div>
                      </Link>
                      <Link to="/education/meta-trader-4">
                        <div className="sideBarItem">
                          <span> MetaTrader 4</span>
                        </div>
                      </Link>
                    </div>
                  </HeaderMobileLastDropDown>
                </>
              )}
              {this.state.activeDropDown === "pamm" && (
                <>
                  <HeaderMobileLastDropDown title="PAMM">
                    <div
                      onClick={() => {
                        this.handleChangeDropDown(null);
                        this.props.closeHeader();
                        return;
                      }}
                    >
                      <Link to="/PAMM">
                        <div className="sideBarItem">
                          <span> PAMM Manager</span>
                        </div>
                      </Link>
                    </div>
                  </HeaderMobileLastDropDown>
                </>
              )}
              {this.state.activeDropDown === "aboutUs" && (
                <>
                  <HeaderMobileLastDropDown title="About Us">
                    <div
                      onClick={() => {
                        this.handleChangeDropDown(null);
                        this.props.closeHeader();
                        return;
                      }}
                    >
                      <Link to="/about-us">
                        <div className="sideBarItem">
                          <span> About Us</span>
                        </div>
                      </Link>
                      <Link to="/mission-and-values">
                        <div className="sideBarItem">
                          <span> Mission And Values</span>
                        </div>
                      </Link>
                      <Link to="/trading-terms">
                        <div className="sideBarItem">
                          <span> Trading Terms</span>
                        </div>
                      </Link>
                    </div>
                  </HeaderMobileLastDropDown>
                </>
              )}
            </div>
          )}
        </div>
      </>
    );
  }
}
