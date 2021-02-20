import React, { Component } from "react";
import Analyticstable from "./Analyticstable";

export default class Analytics extends Component {
 constructor(props) {
   super(props);
   this.state = {
    date: new Date(),
    analyticData: [
      {
        time: "2:30",
        currency: "NZD",
        event: "BuisnessNZ Services Index",
        eventColor: "yellow",
        actualColor: "green",
        actual: "8.63%",
        forcast: "8.63%",
        previous: "2.9%",
      },
      {
        time: "4:50",
        currency: "JPY",
        event: "Adjusted Trade Balance",
        eventColor: "green",
        actualColor: "green",
        actual: "12.51%",
        forcast: "12.51%",
        previous: "8.18%",
      },
      {
        time: "4:50",
        currency: "JPY",
        event: "Trade Balance",
        eventColor: "grey",
        actualColor: "red",
        actual: "-2.14%",
        forcast: "-2.14%",
        previous: "-0.79%",
      },
    ],
  };
 }
 
  render() {
    return (
      <div>
        <div className="analyticBox">
          <div className="container-fluid">
            <div className="row  ">
              <div className="col-12">
                <h2 className="titleFont text-center">ANALYTICS</h2>
                <p className="textFont mh10vw ph5vw">
                  After bottoming out in 119.80 or yearly lows, the cross
                  manageed to retake the key barrier at 120.00 the figure and is
                  now looking to consolidate around those levels. the daily
                  recovery in the European currency stays underpinned by the
                  dovish message conis.
                </p>
              </div>
            </div>
           <Analyticstable Data={this.state.analyticData}/>
          </div>
        </div>
      </div>
    );
  }
}
