import React, { Component } from "react";
import HeroSection from "../AboutUsPage/components/HeroSection";
import CompareAccoountHeader from "./components/compareAccoountHeader";
import "./components/compareAccount.css";
import CompareAccountStandard from "./components/CampareAccountStandard";
import CompareAccountEcn from "./components/CompareAccountEcn";
import CompareAccountStandardM from "./components/CompareAccountStandardM";
import CompareAccountEcnM from "./components/CompareAccountEcnM"
import { connect } from "react-redux";
import CompareAccountBonus from "./components/CompareAccountBonus";
import CompareAccountBonusM from "./components/CompareAccountBonusm";

class CompareAccountPage extends Component {
  constructor() {
    super();
    // state
    this.state = {
      active: 's',
    };
  }

  // handle active fun
  handleActiveFun (type) {
    this.setState({
      active: type,
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
              active={this.state.active == 's'}
              handleActiveFun={this.handleActiveFun.bind(this,'s')}
            />
          </div>

          {this.props.account_type == 's'?

          <><div
            className="row compareAccountRow d-none d-md-flex"
          >
            <CompareAccountStandard />
          </div>


          <div className="row compareAccountRowM d-md-none">
            <CompareAccountStandardM/></div> </> : null }
            {this.props.account_type == 't'?
            <>
             <div
            className="row compareAccountRow d-none d-md-flex"
          >

            <CompareAccountEcn />
          </div>
          <div className="row compareAccountRowM d-md-none">
            <CompareAccountEcnM/>
            </div>

          </> : null}

          {this.props.account_type == 'b'?
            <>
             <div
            className="row compareAccountRow d-none d-md-flex"
          >

            <CompareAccountBonus />
          </div>
          <div className="row compareAccountRowM d-md-none">
            <CompareAccountBonusM/>
            </div>

          </> : null}


        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) =>{
    return{
        account_type:state.account_type
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        changePromotions:(data)=>{dispatch({type:'CHANGE_ACCOUNT_TYPE',payload:data})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CompareAccountPage);
