import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row footerRow">
          <div className="col-md-4 col-sm-12 ">
            <div className="footerCol">
              <img
                className="footerLogo"
                src="/assets/images/logotrans.png"
                alt="image"
              ></img>
              <h3 className="footerTitle">Registered Office</h3>
              <p className="footerText">
                Cabana Capitals <br />
                Suit 305, Griffith Corporate Centre <br />
                Beachmont, P.O.Box 1510, Kingstown St. <br />
                Vincent and the Grenadines
              </p>
              <div className="footerSocialBox">
                <div className="footerSocialCircle">
                  <img
                    src="/assets/images/socialIcon1.png"
                    alt="social"
                    className="footerSocialImage"
                  ></img>
                </div>
                <div className="footerSocialCircle">
                  <img
                    src="/assets/images/socialIcon2.png"
                    alt="social"
                    className="footerSocialImage"
                  ></img>
                </div>
                <div className="footerSocialCircle">
                  <img
                    src="/assets/images/socialIcon3.png"
                    alt="social"
                    className="footerSocialImage"
                  ></img>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 footerCol">
            <h3 className=" footerLinkTitle">QUICK LINK</h3>
            <Link to="/cookie-policy">
            <p className="footerLinkText">{"\u00BB"} Cookie Policy</p>
              
            </Link>
            <Link to="/regulatory-compliance">
            <p className="footerLinkText">{"\u00BB"} Regulatory/compliance</p>

            </Link>
            
            <Link to="/privacy-policy">
            <p className="footerLinkText">{"\u00BB"} Privacy Policy</p>

            </Link>
            <Link to="/risk-disclouser">
            <p className="footerLinkText">{"\u00BB"} Risk Disclosure</p>
            </Link>
            
          
           
            <p className="footerLinkText">{"\u00BB"} Safety Of Fund</p>
            <Link to="/terms-and-condition">
              <p className="footerLinkText">{"\u00BB"} Terms and Conditions</p>
            </Link>
            <p className="footerLinkText">{"\u00BB"} Client Agreement</p>
          </div>
          <div className="col-md-4 col-sm-12 footerCol">
            <h3 className=" footerLinkTitle">CONTACT</h3>
            <Link to="/our-location" >

            <p className="footerLinkText">{"\u00BB"} Our Location</p>

            </Link>
            <p className="footerLinkText">{"\u00BB"} Contact Us</p>
          </div>
        </div>
        <div className="row footerSecondRow">
          <p className="footerText footerText_justify">
            <span className="textBold">Legal:</span> Cabana Capitals Limited is
            incorporated in St. Vincent & the Grenadines as an International
            Broker Company with the registration number 24185 IBC 2017. The
            objects of the Company are all subject matters not forbidden by
            International Business Companies (Amendment and Consolidation) Act,
            Chapter 149 of the Revised Laws of Saint Vincent and Grenadines,
            2009, in particular but not exclusively all commercial, financial,
            lending, borrowing, trading, service activities and the
            participation in other enterprises as well as to provide brokerage,
            training and managed account services in currencies, commodities,
            indexes, CFD's and leveraged financial instruments. Risk Warning:
            Trading Forex and CFDs involves significant risk and can result in
            the loss of your invested capital. You should not invest more than
            you can afford to lose and should ensure that you fully understand
            the risks involved. Trading leveraged products may not be suitable
            for all investors. Before trading, please take into consideration
            your level of experience, investment objectives and seek independent
            financial advice if necessary. It is the responsibility of the
            Client to ascertain whether he/she is permitted to use the services
            of the Cabana Capitals based on the legal requirements in his/her
            country of residence. Please read Cabana Capitals™ full Risk
            Disclosure. Regional Restrictions: Cabana Capitals does not provide
            services to residents of the EU Region, USA , Canada , Belgium and
            FATF Black Listed Countries. Find out more in the Account Opening
            section of our FAQs.
          </p>
          {/* <p className="footerText">
            CCL FINTECH LIMITED is registered in the United Kindom, Company
            number 11501218. Registered address: 71-75 Shelton Street, London,
            Greater London, United Kingdom, WC2H 9JQ.
          </p> */}
        </div>
        <div className="row footerRightsRow">
          <h5 className="footerRightsText">
            Copyright 2020 {"\u00A9"} Cabana Capitals All Right Reserved
          </h5>
        </div>
      </div>
    );
  }
}
