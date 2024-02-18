import React, { Component } from 'react';

class Analyticstable extends Component {
    render() {
        return (
            <div>
                 <div className="mainAnalyticBox">
              <div className="col-md-12 col-sm-12 mb-4">
                <div className="analyticButtonRow">
                  <div className="">
                    <button className="btnPrimaryPink2">
                      ECONOMIC CALENDER
                    </button>
                  </div>
                  <div className="">
                    <button className="btnPrimaryOutline">
                      TECHNICAL ANALYSIS
                    </button>
                  </div>
                  <div className="">
                    <button className="btnPrimaryOutline">COMPANY NEWS</button>
                  </div>
                </div>
              </div>
              <div className=" dateTimeRow">
                <div className="calenderBox d-inline">
                  <img
                    className="calenderImage d-inline"
                    src="/assets/images/calenderIcon.png"
                  ></img>
                  <p className="textFont bold d-inline pl-1">19-25 Oct, 2020</p>
                </div>
                <div className="timeBox">
                  <p className="textFont bold">Current time : 0:39 (GMT)</p>
                </div>
              </div>
              <div className="tableOuterBox">
                <div className="tableHeader">
                  <div className="textFont textBold headerTime">Time</div>
                  <div className="textFont textBold headerCurrency">
                    Currency
                  </div>
                  <div className="textFont textBold headerEvent">Event</div>
                  <div className="textFont textBold headerActual">
                    <span className=" d-none  d-md-block">Actual</span>
                    <span className=" d-sm-block d-md-none">Act</span>
                  </div>
                  <div className="textFont textBold headerForcast">
                    <span className=" d-none  d-md-block">Forcast</span>
                    <span className=" d-sm-block d-md-none">Fcst</span>
                  </div>
                  <div className="textFont textBold headerPrevious">
                    <span className=" d-none  d-md-block">Previous</span>
                    <span className=" d-sm-block d-md-none">Pre</span>
                  </div>
                </div>
                <div className="tableContentBox">
                  {this.props.Data &&
                    this.props.Data.map((data) => {
                      return (
                        <div className="contentRow">
                          <div className="contentText headerTime">
                            {data.time}
                          </div>
                          <div className="contentText headerCurrency">
                            {data.currency}
                          </div>
                          <div className=" headerEvent">
                            <div className=" d-flex">
                              <div
                                className="eventColorBox mr-3 "
                                style={{ backgroundColor: data.eventColor }}
                              ></div>
                              <div className="contentText">{data.event}</div>
                            </div>
                          </div>
                          <div
                            className="contentText headerActual"
                            style={{ color: data.actualColor }}
                          >
                            {data.actual}
                          </div>
                          <div
                            className="contentText headerForcast"
                            style={{ color: data.actualColor }}
                          >
                            {data.forcast}
                          </div>
                          <div
                            className="contentText headerPrevious"
                            style={{ color: data.actualColor }}
                          >
                            {data.forcast}
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div> 
            </div>
        );
    }
}

export default Analyticstable;