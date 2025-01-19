import React, { Component } from "react";
import { connect } from "react-redux";
import { a } from "react-router-dom";

class Footer extends Component {
    constructor(props) {
        super(props);
        console.log('props', this.props)
    }
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
                                Aurum Markets Limited<br />
                                Office 212, Block A, The Junction<br />
                                Business Hub, Calebasses Branch  <br />
                                Road, Calebasses, 20201, Mauritius


                                {/*<br /><br />Aurum Markets Markets Limited<br />
                                Office no. 212, Ground floor ,Block A,
                                <br />The junction Business Hub, <br />
        Calebasses Branch Rd, Calebasses, Mauritius */}
                            </p>
                            <div className="footerSocialBox">
                                <div className="footerSocialCircle">
                                    <a href="https://www.facebook.com/CabanaCapitalsDubai/">
                                        <img
                                            src="/assets/images/socialIcon1.png"
                                            alt="social"
                                            className="footerSocialImage"
                                        ></img> </a>
                                </div>
                                <div className="footerSocialCircle">
                                    <a href="https://twitter.com/cabana_capitals">
                                        <img
                                            src="/assets/images/socialIcon2.png"
                                            alt="social"
                                            className="footerSocialImage"
                                        ></img> </a>
                                </div>
                                <div className="footerSocialCircle">
                                    <a href="https://youtube.com/c/CabanaCapitals">
                                        <img
                                            src="/assets/images/socialIcon3.png"
                                            alt="social"
                                            className="footerSocialImage"
                                        ></img></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* {"\u00BB"} */}
                    <div className="col-md-4 col-sm-12 footerCol">
                        <h3 className=" footeraTitle">QUICK Links</h3>
                        <a href="/cookie-policy">
                            <p className="footerLinkText"> Cookie Policy</p>

                        </a>
                        <a href="/regulatory-compliance">
                            <p className="footerLinkText"> Regulatory/compliance</p>

                        </a>

                        <a href="/privacy-policy">
                            <p className="footerLinkText"> Privacy Policy</p>

                        </a>
                        <a href="/risk-disclouser">
                            <p className="footerLinkText"> Risk Disclosure</p>
                        </a>
                        <a href="/instruction-security">
                            <p className="footerLinkText"> Safety Of Fund</p>
                        </a>




                        <a href="/terms-and-condition">
                            <p className="footerLinkText"> Terms and Conditions</p>
                        </a>
                        <a href="/pdf/CCL_Term_and_Conditions.pdf" target="_blank"  >
                            <p className="footerLinkText"> Client Agreement</p>
                        </a>
                        <a href="/files/IB_Agreement.pdf" target="_blank"  >
                            <p className="footerLinkText"> IB Agreement</p>
                        </a>
                    </div>

                    <div className="col-md-4 col-sm-12 footerCol">
                        <h3 className=" footeraTitle">CONTACT</h3>
                        <a href="/our-location" >

                            <p className="footerLinkText"> Our Location</p>

                        </a>
                        {/* <p className="footerLinkText"> Contact Us</p> */}
                    </div>

                </div>
                <div className="row footerSecondRow">

                    <p className="footerText footerText_justify">
                        <span className="textBold">Legal: </span>
                        Aurum Markets Limited is incorporated in Mauritius as an International Broker Company with the registration number 195270 GBC. The objects of the Company are all commercial, financial, lending, borrowing, trading, service activities and the participation in other enterprises as well as href provide brokerage, training and managed account services in currencies, commodities, indexes, CFD's and leveraged financial instruments. Risk Warning: Trading Forex and CFDs involves significant risk and can result in the loss of your invested capital. You should not invest more than you can afford to lose and should ensure that you fully understand the risks involved. Trading leveraged products may not be suitable for all investors. Before trading, please take into consideration your level of experience, investment objectives and seek independent financial advice if necessary. It is the responsibility of the Client href ascertain whether he/she is permitted href use the services of the Aurum Markets based on the legal requirements in his/her country of residence. Please read Aurum Markets™️ full Risk Disclosure. Regional Restrictions: Aurum Markets does not provide services href residents of the EU Region, USA, Canada, Belgium, India and FATF Black Listed Countries. Find out more in the Account Opening section of our FAQs.
                    </p>


                    <p className="footerText footerText_justify">
                        <span className="textBold"> Risk Warning: Forex margin trading is risky, can involve money loss due to leverage, and may not be suitable for all investors. Be sure that you understand how derivative products work and fully understand possible risks. Set investment goals based on your trading experience and seek independent advice if you need it. View full Risk Disclosure. Regional Restrictions: Aurum Markets does not provide services href residents of the EU Region, USA, Canada, Belgium, India and FATF Black Listed Countries. Find out more in the Account Opening section of our FAQs.
                        </span>
                    </p>


                    <p className="footerText footerText_justify">
                        Aurum Markets Ltd incorporate in Mauritius with company registration number 195270 GBC.
                    </p>

                </div>
                <div className="row footerRightsRow">
                    <h5 className="footerRightsText">
                        Copyright {(new Date().getFullYear())} {"\u00A9"} Aurum Markets All Right Reserved
                    </h5>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        country: state.country,
        continent: state.continent
    }
}

export default connect(mapStateToProps)(Footer);
