import React, { Component } from "react";

export default class CampareAccountStandard extends Component {
  render() {
    return (
      <>
        <div className="col-md-4 col-sm-12 px-0">
          <div className="compareAccountCard">
          <div className="compareAccountActions">
              <h4 className="compareAccountInfoTitle ">PREMIUM</h4>
              <p className="compareAccountPrice">$300/min</p>
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
              <h2 className="compareAccountNorText mt-3"><strong>Account Currency</strong>: USD</h2>
              <hr className="compareAccountDivider" />
              <h2 className="compareAccountNorText"><strong>Leverage/Margin Requriements</strong>: Up to 1:500 for currencies</h2>
              <hr className="compareAccountDivider" />
              <h2 className="compareAccountNorText"><strong>Maximum Deposit: </strong> ✘</h2>
              <hr className="compareAccountDivider" />
              <h2 className="compareAccountNorText"><strong>Minimum Deposit: </strong> $300</h2>
              <hr className="compareAccountDivider" />
              <h2 className="compareAccountNorText"><strong>Commission: </strong> NIl</h2>
              <hr className="compareAccountDivider" />
              <h2 className="compareAccountNorText"><strong>Order Execution: </strong> Market Execution</h2>

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
              <h4 className="compareAccountInfoTitle ">ELITE</h4>
              <p className="compareAccountPrice">$500/min</p>
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
              <h2 className="compareAccountNorText mt-3"><strong>Account Currency</strong>: USD</h2>
              <hr className="compareAccountDivider" />
              <h2 className="compareAccountNorText"><strong>Leverage/Margin Requriements</strong>: Up to 1:200 for currencies</h2>
              <hr className="compareAccountDivider" />
              <h2 className="compareAccountNorText"><strong>Maximum Deposit: </strong> ✘</h2>
              <hr className="compareAccountDivider" />
              <h2 className="compareAccountNorText"><strong>Minimum Deposit: </strong> $500</h2>
              <hr className="compareAccountDivider" />
              <h2 className="compareAccountNorText"><strong>Commission: </strong> $7</h2>
              <hr className="compareAccountDivider" />
              <h2 className="compareAccountNorText"><strong>Order Execution: </strong> Market Execution</h2>
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
              <p className="text">Spread: From 0.0</p>
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
              <h4 className="compareAccountInfoTitle ">RAW ECN</h4>
              <p className="compareAccountPrice">$1000/min</p>
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
              <h2 className="compareAccountNorText mt-3"><strong>Account Currency</strong>: USD</h2>
              <hr className="compareAccountDivider" />
              <h2 className="compareAccountNorText "><strong>Leverage/Margin Requriements</strong>: Up to 1:200 for currencies</h2>
              <hr className="compareAccountDivider" />
              <h2 className="compareAccountNorText"><strong>Maximum Deposit: </strong> ✘</h2>
              <hr className="compareAccountDivider" />
              <h2 className="compareAccountNorText"><strong>Minimum Deposit: </strong> $1000</h2>
              <hr className="compareAccountDivider" />
              <h2 className="compareAccountNorText"><strong>Commission: </strong> $5</h2>
              <hr className="compareAccountDivider" />
              <h2 className="compareAccountNorText"><strong>Order Execution: </strong> Market Execution</h2>

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
            <p className="text">Spread: From 0.0</p>
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
                <span className="bold">Step Lot: </span>
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
