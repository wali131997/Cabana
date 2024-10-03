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
                                Cabana Capitals Limited<br />
                                Suite 305, Griffith Corporate Centre,<br /> PO Box 1510, Beachmont, Kingstown,<br /> Saint Vincent and the Grenadines
                                {/*<br /><br />Cabana Markets Limited<br />
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
                        <a href="https://cabanacapitals.com/pdf/CCL_Term_and_Conditions.pdf" target="_blank"  >
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
                    {
                        this.props.continent != 'Africa' ?
                            <p className="footerText footerText_justify">
                                <span className="textBold">Legal: </span>
                                Cabana Capitals Limited is incorporated in St. Vincent & the Grenadines as an International Broker Company
                                with the registration number 24185 IBC 2017. The objects of the Company are all subject matters not forbidden
                                by International Business Companies (Amendment and Consolidation) Act, Chapter 149 of the Revised Laws of Saint

                                Vincent and Grenadines, 2009, in particular but not exclusively all commercial, financial, lending, borrowing,
                                trading, service activities and the participation in other enterprises as well as href provide brokerage, training and managed account services in currencies, commodities, indexes, CFD's and leveraged financial instruments. Risk Warning: Trading Forex and CFDs involves significant risk and can result in the loss of your invested capital. You should not invest more than you can afford href lose and should ensure that you fully understand the risks involved. Trading leveraged products may not be suitable for all investors. Before trading, please take into consideration your level of experience, investment objectives and seek independent financial advice if necessary. It is the responsibility of the Client href ascertain whether he/she is permitted href use the services of the Cabana Capitals based on the legal requirements in his/her country of residence. Please read Cabana Capitals™ full Risk Disclosure. Regional Restrictions: Cabana Capitals does not provide services href residents of the EU Region, USA, Canada, Belgium, India and FATF Black Listed Countries. Find out more in the Account Opening section of our FAQs.
                                {/* Cabana (Markets) Limited is regulated by the financial services commission (FSC) of Republic of Mauritius, c
                                ategory 1 Global Business No. GB22200748License | Company Reg. No 195270 GBC. */}
                            </p>
                            :
                            <></>
                    }
                    {
                        this.props.country != 'South Africa' ?
                            <p className="footerText footerText_justify">
                                <span className="textBold"> Risk Warning:</span> Forex margin trading is risky, can involve money loss due to leverage, and may not be suitable for all investors. Be sure that you understand how derivative products work and fully understand possible risks. Set investment goals based on your trading experience and seek independent advice if you need it. View full Risk Disclosure.
                                Regional Restrictions: Cabana Capitals does not provide services href residents of the EU Region, USA, Canada, Belgium, India and FATF Black Listed Countries. Find out more in the Account Opening section of our FAQs.
                                {/* <br /> <br />Cabana Capitals brand is represented by the following entities and regulations: */}
                                <br /><br />Cabana Capitals Ltd incorporate in St. Vincent & the Grenadines with company registration number 24185 IBC 2017.
                                {/* <br /><br /> Cabana Capitals is regulated in South Africa under the name of Gao Financial Services (Pty) Ltd and holds a Financial Service Provider (FSP) license number 44692 from the Financial Sector Conduct Authority (FSCA) in South Africa. */}
                            </p> :
                            <></>
                    }
                    {
                        this.props.continent == 'Africa' && this.props.country == 'South Africa' ?
                            <p className="footerText footerText_justify">
                                <span className="textBold"> Risk Warning:</span> Forex margin trading is risky, can involve money loss due to leverage, and may not be suitable for all investors. Be sure that you understand how derivative products work and fully understand possible risks. Set investment goals based on your trading experience and seek independent advice if you need it. View full Risk Disclosure.
                                <br /><br /> Gao Financial Services (Pty) Ltd. holds a Financial Service Provider (FSP) licence number 44692 from the Financial Sector Conduct Authority (FSCA) in South Africa.
                                <br /><br /> Gao Financial Services (Pty) Ltd. has the authority to operate under the Cabana Capitals brand and trademarks.
                            </p> :
                            <></>
                    }

                    this.props.country != 'India' &&   this.props.country != 'South Africa' && this.props.country != 'United Arab Emirates' ?
                    <p className="footerText footerText_justify">
                        Cabana capitals is regulated in Mauritius under the name of Cabana (Markets) Limited and is regulated by the Financial Services Commision of Mauritius (FSC) under the license number
                        GB22200748. The FSC is the principal regulator of the financial services industry in Mauritius.

                    </p> :
                    <></>

                    {/* <p className="footerText">
            CCL FINTECH LIMITED is registered in the United Kindom, Company
            number 11501218. Registered address: 71-75 Shelton Street, London,
            Greater London, United Kingdom, WC2H 9JQ.
          </p> */}
                </div>
                <div className="row footerRightsRow">
                    <h5 className="footerRightsText">
                        Copyright {(new Date().getFullYear())} {"\u00A9"} Cabana Capitals All Right Reserved
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
