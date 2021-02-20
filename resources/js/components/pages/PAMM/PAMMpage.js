import React, { Component } from "react";
import HeroSection from "../AboutUsPage/components/HeroSection";
import PammDetail from "./components/pammDetail";
import "./components/pammPage.css";
import PAMMtable from "./components/PAMMtable";

export default class PAMMpage extends Component {
  render() {
    return (
      <div>
        <HeroSection title="CHOOSE YOUR PAMM" title2="MANAGER BASED ON HOW" />
        <PAMMtable />
        <PammDetail />
      </div>
    );
  }
}
