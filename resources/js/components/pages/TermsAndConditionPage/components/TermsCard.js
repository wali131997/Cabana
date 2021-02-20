import React, { Component } from "react";
import { data } from "./CardData";
export default class TermsCard extends Component {
  render() {
    return (
      <>
        <div className="termsBg">
          <div className="container-fluid">
            <div className="row termsRow">
              <div className="col-12 text-center mb-4">
                <h4 className="aboutDetailTitle">Trading Terms</h4>
              </div>

              {data.map((item) => {
                return (
                  <div className="col-md-4 col-sm-12">
                    <div className="termsCardBox">
                      <div className="termsCardInfoBox">
                        <div className="termsCardTitle">{item.title}</div>
                        <p className="termsCardText">{item.des}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
}
