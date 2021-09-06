import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import HeroSection from '../AboutUsPage/components/HeroSection';
import "./components/ourLocation.css"
const OurLocationPage = () => {
    return (
        <div className="ourLocation">
          <HeroSection title="OUR LOCATION"
          bg="contactus.jpg"
          />

           <div style={{position:"relative"}}>
          <div className='d-none d-md-inline'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.9079806071104!2d-0.12573858434267496!3d51.51490417963637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ccab2ffaa9%3A0x9192a9c4dd80455b!2sCovent%20Garden!5e0!3m2!1sen!2s!4v1622785627459!5m2!1sen!2s" width="100%" height="450" frameBorder="0" style={{border:'0'}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe></div>


           <div className="mapCard">
            <div className="title">London Office</div>
            <div className="text">71-75, Shelton Street,<br/>
Covent Garden,<br/>
London, WC2H 9JQ</div>

            <div className="title">Customer Support</div>
            <div className="text">For any enquiries call or whatsapp us .</div>
            <div className="text mb-1"><FontAwesomeIcon icon={faPhone} color="#fff"  /> +44 208 124 4440</div>
            <div className="text"><FontAwesomeIcon icon={faEnvelope} color="#fff"  /> support@cabanacapitals.com</div>
           </div>
           </div>

          <div className='basicRow'>
          <div className="cardFlex">
               <div className="locationCard">
                   <div className='title'>London</div>
                   <div className="text"><FontAwesomeIcon icon={faMapMarkerAlt} color="#ee3f97"  /> <span>71-75, Shelton Street,<br/>
                    Covent Garden,<br/>
                    London, WC2H 9JQ
                </span></div>
                <div className="text mb-1"><FontAwesomeIcon icon={faPhone} color="#ee3f97"  /> +44 208 124 4440</div>
                <div className="text"><FontAwesomeIcon icon={faEnvelope} color="#ee3f97"  /> support@cabanacapitals.com</div>
               </div>
               <div className="locationCard">
                   <div className='title'>Dubai</div>
                   <div className="text"><FontAwesomeIcon icon={faMapMarkerAlt} color="#ee3f97"  /> <span>Office No. 2005, 20th Floor, 2306, Prism tower, Business Bay, <br/> Dubai, UAE


                </span></div>
                <div className="text mb-1"><FontAwesomeIcon icon={faPhone} color="#ee3f97"  />  +971 (0) 547 468 487</div>
                <div className="text"><FontAwesomeIcon icon={faEnvelope} color="#ee3f97"  /> support@cabanacapitals.com</div>
               </div>
               <div className="locationCard">
                   <div className='title'>Nigeria</div>
                   <div className="text"><FontAwesomeIcon icon={faMapMarkerAlt} color="#ee3f97"  /> <span>4th floor Mosesola House, 103 Allen Avenue,<br/> Ikeja Lagos.

                </span></div>
                <div className="text mb-1"><FontAwesomeIcon icon={faPhone} color="#ee3f97"  /> +234 805 653 1053.</div>
                <div className="text"><FontAwesomeIcon icon={faEnvelope} color="#ee3f97"  /> hu@cabanacapitals.com</div>
               </div>
           </div>
          </div>
        </div>
    );
};

export default OurLocationPage;
