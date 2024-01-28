import React, { Component } from "react";
import HeroSection from "../AboutUsPage/components/HeroSection";
import CompareAccoountHeader from "./components/compareAccoountHeader";
import "./components/compareAccount.css";
import CompareAccountStandard from "./components/CampareAccountStandard";
import CompareAccountEcn from "./components/CompareAccountEcn";
import CompareAccountStandardM from "./components/CompareAccountStandardM";
import CompareAccountEcnM from "./components/CompareAccountEcnM"
import { connect } from "react-redux";
class CompareAccountPage extends Component {
  constructor(props) {
    super(props);
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
        {
            this.props.country ?
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

                    <div className="text-center">
                        <p>*Refer to Client Agreement</p>
                    </div>

                </div>
                :
                <div className="container ">


                    <div className="text-center mt-5 pt-5 mb-5 pb-5">

                    <div class="spinner-border text-dark" role="status">
                    <span class="sr-only">Loading...</span>
                    </div>
                    <h6 className="text-center mt-2">Please wait, Account types are being loaded</h6>
                    </div>
                </div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
    return{
        country:state.country
    }
}
export default connect(mapStateToProps)(CompareAccountPage);
