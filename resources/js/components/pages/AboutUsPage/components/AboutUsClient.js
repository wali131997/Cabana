import React, { Component } from "react";
import MultiSlider from "./ClientMultiSlider";

export default class AboutUsClient extends Component {
  render() {
    return (
      <div>
        <div className="aboutClientRow">
          <h4 className="aboutDetailTitle">
            What Clients have To Say About Us
          </h4>
        </div>
        <div className="clientSliderDiv">
          <div className="clientSliderContainer">
            <MultiSlider />
            <div className="text-center mt-5 mb-5">
              <button className="btnPrimaryPink2 pl-3 pr-3">GET STARTED</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
