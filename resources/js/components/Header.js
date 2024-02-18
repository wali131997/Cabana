// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";
import { Navbar, NavDropdown, Nav, NavLink } from "react-bootstrap";
import { Link ,withRouter } from "react-router-dom";
import AccountDropDown from "./HeaderComp/AccountDropDown";
import PaymentDropDown from "./HeaderComp/PaymentDropDown";
import PlatformDropDown from "./HeaderComp/PlatformDropDown";
import AnalyticsDropDown from "./HeaderComp/AnaliticsDropDown";
import PAMMsDropDown from "./HeaderComp/PAMMsDropDown";
import AboutUsDropDown from "./HeaderComp/AboutUsDropDown";
import PromotionDropDown from "./HeaderComp/PromotionDropDown";
import HeaderIem from "./HeaderComp/HeaderIem";
import Refferal from "./HeaderComp/Refferal";
import TradingInstruments from "./HeaderComp/TradingInstruments";

 class Header extends Component {

  componentDidMount(){
    const url=this.props.history.location.pathname;
    console.log(url)
    if(url==="/about-us")
    console.log(url)
    this.setState({
      activeAboutUs:true
    })
  }


  constructor(){
    super();
    this.state={activeAboutUs:false}

  }
  render() {
    const {activeAboutUs}=this.state
    return (
      <>
        <Navbar className="navbar-dark" expand="lg" fixed={activeAboutUs?"top":""} >
          <Navbar.Brand href="/" className="navBrand">
            <img
              className="headerLogo"
              src="/assets/images/logotrans.png"
              alt="logo"
            ></img>
          </Navbar.Brand>
          <Navbar.Toggle onClick={this.props.handleSideBar} aria-controls="" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto mr-4 d-none d-md-flex navItemRow">

                <HeaderIem styles={{borderLeft:'0'}} title="ABOUT US">
                <AboutUsDropDown />
                </HeaderIem>
              <HeaderIem   title="FX TRADING">
                <AccountDropDown />
              </HeaderIem>

              {/* <HeaderIem title="TRADING INSTRUMENTS">
              <TradingInstruments />
              </HeaderIem> */}
                <HeaderIem title="PARTNERSHIP PROGRAM">
                <Refferal />
              </HeaderIem>
              {/* <HeaderIem title="PAYMENTS">
              <PaymentDropDown />
              </HeaderIem> */}
              <HeaderIem title="PROMOTIONS AND CONTESTS">
                <PromotionDropDown />
              </HeaderIem>

              <HeaderIem title="MARKET RESEARCH & EDUCATION">
              <AnalyticsDropDown />
                {/* <PAMMsDropDown /> */}
              </HeaderIem>
              <HeaderIem title="SOCIAL & PAMM">
                <PAMMsDropDown />
              </HeaderIem>
              {/* <HeaderIem title="SOCIAL TRADING">
                <AboutUsDropDown />
              </HeaderIem> */}

              {/* <HeaderIem title="ABOUT US">
                <AboutUsDropDown />
              </HeaderIem> */}

              {/* <NavLink>
                <FontAwesomeIcon
                  icon={faSearch}
                  size="sm"
                  color="###"
                ></FontAwesomeIcon>
              </NavLink> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}
export default withRouter(Header)
