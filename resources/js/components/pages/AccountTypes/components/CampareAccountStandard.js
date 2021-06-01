import React, { Component } from "react";

export default class CampareAccountStandard extends Component {
  render() {
    return (
      <>
        <div className="col-md-4 col-sm-12 px-0">
          <div className="compareAccountCard">
          <div className="compareAccountActions">
              <h4 className="compareAccountInfoTitle ">MICRO</h4>
              <p className="compareAccountPrice">$50/min</p>
              <hr className="compareAccountDivider" />
              <div className="compareAccountActionRow">
                <div onClick={()=>{ window.open('https://secure.cabanacapitals.com/register/','_self')}} className="compareAccountActionButton border-none">
                  LIVE
                </div>
                <div onClick={()=>{ window.open('https://secure.cabanacapitals.com/register/','_self')}} className="compareAccountActionButton">Demo</div>
              </div>
            </div>
            <div className="compareAccountInfo">
              
              <div className="centerDiv mt-4">
                <img
                  src="/assets/images/accountsMt4.png"
                  alt="compare account"
                  className="compareAccountImg "
                ></img>
              </div>
              <div className="centerDiv mt-3 opacityZero">
                <img
                  src="/assets/images/accountsMt5.png"
                  alt="compare account"
                  className="compareAccountImg "
                ></img>
              </div>
              <p className="compareAccountText mt-4">RECOMMENDED FOR:</p>
              <h4 className="compareAccountInfoTitle">
                NOVICE <br />
                TRADER
              </h4>
              <p className="compareAccountTextSm mt-4">For Small Investment</p>
              <div className="text-center">
                <button onClick={()=>{ window.open('https://secure.cabanacapitals.com/register/','_self')}} className="compareAccountButton">
                  Open Mt4 Micro Account
                </button>
              </div>
            </div>
           
            <div className="compareAccountDetail">
              <h4 className="title d-inine "><span className="opacityZero">ss</span></h4>
              <p className="text">Spread: From 2.5</p>
              <hr className="divider" />
              <p className="text">Stop out: 50%</p>
              <hr className="divider" />
              <p className="text">Swap Free  ✔</p>
              <hr className="divider" />
              <h4 className="title d-inine "><span className="opacityZero">ss</span></h4>
              <p className="text pt-4">
                <span className="bold"> Pricing:</span> MT4:5 decimals for FX (3
                on JPY pairs), Spot Metals: 2 decimals for XAUUSD and 3 decimals
                for XAGUSD
              </p>
              <hr className="divider" />
              <p className="text pt-4">
                <span className="bold"> Trading Instruments:</span>
                Majors, Minors, Spot Metals - 2, Spot Energy - 2, US30, GER30
              </p>
              <hr className="divider" />
              <h4 className="title d-inine "><span className="opacityZero">ss</span></h4>
              <p className="text pt-4">
                <span className="bold">Step Lot:</span>
                0.01
              </p>
              <hr className="divider" />
              <p className="text">
                <span className="bold">Maximum Number of Orders:</span>
                500
              </p>
              <hr className="divider" />
              <button onClick={()=>{ window.open('https://secure.cabanacapitals.com/register/','_self')}} className="btnPrimaryPink2 pl-4 pr-4 mt-4 mb-5 mr-0">
                GET STARTED
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-sm-12 px-0">
          <div className="compareAccountCard">
          <div className="compareAccountActions compareAccountBg1">
              <h4 className="compareAccountInfoTitle ">Active</h4>
              <p className="compareAccountPrice">$100/min</p>
              <hr className="compareAccountDivider" />
              <div className="compareAccountActionRow">
                <div onClick={()=>{ window.open('https://secure.cabanacapitals.com/register/','_self')}} className="compareAccountActionButton border-none">
                  LIVE
                </div>
                <div onClick={()=>{ window.open('https://secure.cabanacapitals.com/register/','_self')}} className="compareAccountActionButton">Demo</div>
              </div>
            </div>
            <div className="compareAccountInfo compareAccountBg2 ">
             
              <div className="centerDiv mt-4">
                <img
                  src="/assets/images/accountsMt4.png"
                  alt="compare account"
                  className="compareAccountImg "
                ></img>
              </div>
              <div className="centerDiv mt-3 opacityZero">
                <img
                  src="/assets/images/accountsMt5.png"
                  alt="compare account"
                  className="compareAccountImg "
                ></img>
              </div>
              <p className="compareAccountText mt-4">RECOMMENDED FOR:</p>
              <h4 className="compareAccountInfoTitle">
                NOVICE <br />
                TRADER
              </h4>
              <p className="compareAccountTextSm mt-4">For Small Investment</p>
              <div className="text-center">
                <button     onClick={()=>{ window.open('https://secure.cabanacapitals.com/register/','_self')}} className="compareAccountButton">
                  Open Mt4 Micro Account
                </button>
              </div>
            </div>
           
            <div className="compareAccountDetail">

              <h4 className="title">Spread</h4>
              <p className="text">Spread: From 2.0</p>
              <hr className="divider" />
              <p className="text">Stop out: 50%</p>
              <hr className="divider" />
              <p className="text">Swap Free  ✔</p>
              <hr className="divider" />
              <h4 className="title">Commision/Spread Markup</h4>
              <p className="text pt-4">
                <span className="bold"> Pricing:</span> MT4:5 decimals for FX (3
                on JPY pairs), Spot Metals: 2 decimals for XAUUSD and 3 decimals
                for XAGUSD
              </p>
              <hr className="divider" />
              <p className="text pt-4">
                <span className="bold"> Trading Instruments:</span>
                Majors, Minors, Spot Metals - 2, Spot Energy - 2, US30, GER30
              </p>
              <hr className="divider" />
              <h4 className="title">RECOMMENDED Deposit</h4>
              <p className="text pt-4">
                <span className="bold">Step Lot:</span>
                0.01
              </p>
              <hr className="divider" />
              <p className="text">
                <span className="bold">Maximum Number of Orders:</span>
                500
              </p>
              <hr className="divider" />
              <button onClick={()=>{ window.open('https://secure.cabanacapitals.com/register/','_self')}} className="btnPrimaryPink2 pl-4 pr-4 mt-4 mb-5 mr-0">
                GET STARTED
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-sm-12 px-0">
          <div className="compareAccountCard">
          <div className="compareAccountActions compareAccountBg3">
              <h4 className="compareAccountInfoTitle ">standard</h4>
              <p className="compareAccountPrice">$200/min</p>
              <hr className="compareAccountDivider" />
              <div className="compareAccountActionRow">
                <div onClick={()=>{ window.open('https://secure.cabanacapitals.com/register/','_self')}} className="compareAccountActionButton border-none">
                  LIVE
                </div>
                <div onClick={()=>{ window.open('https://secure.cabanacapitals.com/register/','_self')}} className="compareAccountActionButton">Demo</div>
              </div>
            </div>
            <div className="compareAccountInfo compareAccountBg4 ">
              <div className="centerDiv mt-3">
                <img
                  src="/assets/images/accountsMt5.png"
                  alt="compare account"
                  className="compareAccountImg "
                ></img>
              </div>
              <div className="centerDiv mt-4">
                <img
                  src="/assets/images/accountsMt4.png"
                  alt="compare account"
                  className="compareAccountImg "
                ></img>
              </div>
              <p className="compareAccountText mt-4">RECOMMENDED FOR:</p>
              <h4 className="compareAccountInfoTitle">
                NOVICE <br />
                TRADER
              </h4>
              <p className="compareAccountTextSm mt-4">For Small Investment</p>
              <div className="text-center">
                <button onClick={()=>{ window.open('https://secure.cabanacapitals.com/register/','_self')}} className="compareAccountButton">
                  Open Mt4 Micro Account
                </button>
              </div>
            </div>
           
            <div className="compareAccountDetail">
            <h4 className="title d-inine "><span className="opacityZero">ss</span></h4>
            <p className="text">Spread: From 1.5</p>
              <hr className="divider" />
              <p className="text">Stop out: 50%</p>
              <hr className="divider" />
              <p className="text">Swap Free  ✔</p>
              <hr className="divider" />
              <h4 className="title d-inine "><span className="opacityZero">ss</span></h4>
              <p className="text pt-4">
                <span className="bold"> Pricing:</span> MT4:5 decimals for FX (3
                on JPY pairs), Spot Metals: 2 decimals for XAUUSD and 3 decimals
                for XAGUSD
              </p>
              <hr className="divider" />
              <p className="text pt-4">
                <span className="bold"> Trading Instruments:</span>
                Majors, Minors, Spot Metals - 2, Spot Energy - 2, US30, GER30
              </p>
              <hr className="divider" />
              <h4 className="title d-inine "><span className="opacityZero">ss</span></h4>
              <p className="text pt-4">
                <span className="bold">Step Lot:</span>
                0.01
              </p>
              <hr className="divider" />
              <p className="text">
                <span className="bold">Maximum Number of Orders:</span>
                500
              </p>
              <hr className="divider" />
              <button onClick={()=>{ window.open('https://secure.cabanacapitals.com/register/','_self')}} className="btnPrimaryPink2 pl-4 pr-4 mt-4 mb-5 ">
                GET STARTED
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
