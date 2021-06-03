import React, { Component } from 'react';

class DEPOSITTable extends Component {
    render() {
        return (
           <>    <div className=" basicRow">
           <div className="DEPOSITTableWrapper">
             <table className="table  DEPOSITTable table-striped table-bordered ">
               <thead>
                 <tr>
                   <th>E-wallets</th>
                   <th>Deposit Method</th>
                   <th>Currency</th>
                   <th>Fee/Commission</th>
                   <th>Processing Time</th>
                   <th>DEPOSIT Funds</th>
                 </tr>
               </thead>
               <tbody>
                 <tr>
                   <td>
                     <img
                       src="/assets/images/neteller-logo.png"
                       className="depositeLogoImage"
                       alt="payment logo"
                     ></img>
                   </td>
                   <td>Neteller</td>
                   <td>USD,EUR,GBP</td>
                   <td>No Commision*</td>
                   <td>Instant</td>
                   <td className="text-center">
                     <button onClick={()=>{ window.open('https://secure.cabanacapitals.com/login/','_self')}} className="depositeOutlineButton">DEPOSIT</button>
                   </td>
                 </tr>
                 <tr>
                   <td>
                     <img
                       src="/assets/images/skrill-logo.png"
                       className="depositeLogoImage"
                       alt="payment logo"
                     ></img>
                   </td>
                   <td>Skrill</td>
                   <td>USD,EUR,GBP</td>
                   <td>No Commision*</td>
                   <td>Instant</td>
                   <td className="text-center">
                     <button onClick={()=>{ window.open('https://secure.cabanacapitals.com/login/','_self')}} className="depositeOutlineButton">DEPOSIT</button>
                   </td>
                 </tr>
                 <tr>
                   <td>
                     <img
                       src="/assets/images/WebMoney-logo.png"
                       className="depositeLogoImage"
                       alt="payment logo"
                     ></img>
                   </td>
                   <td>WebMoney</td>
                   <td>USD,EUR,GBP</td>
                   <td>No Commision*</td>
                   <td>Instant</td>
                   <td className="text-center">
                     <button onClick={()=>{ window.open('https://secure.cabanacapitals.com/login/','_self')}} className="depositeOutlineButton">DEPOSIT</button>
                   </td>
                 </tr>
                 <tr>
                   <td>
                     <img
                       src="/assets/images/perfectMoney-logo.png"
                       className="depositeLogoImage"
                       alt="payment logo"
                     ></img>
                   </td>
                   <td>Perfect Money</td>
                   <td>USD,EUR,GBP</td>
                   <td>No Commision*</td>
                   <td>Instant</td>
                   <td className="text-center">
                     <button onClick={()=>{ window.open('https://secure.cabanacapitals.com/login/','_self')}} className="depositeOutlineButton">DEPOSIT</button>
                   </td>
                 </tr>
                 <tr>
                   <td>
                     <img
                       src="/assets/images/bitcoin-logo.png"
                       className="depositeLogoImage"
                       alt="payment logo"
                     ></img>
                   </td>
                   <td>Bitcoin</td>
                   <td>USD</td>
                   <td>No Commision*</td>
                   <td>Instant</td>
                   <td className="text-center">
                     <button onClick={()=>{ window.open('https://secure.cabanacapitals.com/login/','_self')}} className="depositeOutlineButton">DEPOSIT</button>
                   </td>
                 </tr>
                 <tr>
                   <td>
                     <img
                       src="/assets/images/visa-logo.png"
                       className="depositeLogoImage"
                       alt="payment logo"
                     ></img>
                   </td>
                   <td>Visa</td>
                   <td>USD,AED,INR</td>
                   <td>No Commision*</td>
                   <td>Instant</td>
                   <td className="text-center">
                     <button onClick={()=>{ window.open('https://secure.cabanacapitals.com/login/','_self')}} className="depositeOutlineButton">DEPOSIT</button>
                   </td>
                 </tr>
                 <tr>
                   <td>
                     <img
                       src="/assets/images/maestro-logo.png"
                       className="depositeLogoImage"
                       alt="payment logo"
                     ></img>
                   </td>
                   <td>Mastero</td>
                   <td>USD,AED,INR</td>
                   <td>No Commision*</td>
                   <td>Instant</td>
                   <td className="text-center">
                     <button onClick={()=>{ window.open('https://secure.cabanacapitals.com/login/','_self')}} className="depositeOutlineButton">DEPOSIT</button>
                   </td>
                 </tr><tr>
                   <td>
                     <img
                       src="/assets/images/bank-wire-logo.png"
                       className="depositeLogoImage"
                       alt="payment logo"
                     ></img>
                   </td>
                   <td>Bank Wire Transfer</td>
                   <td>USD,AED </td>
                   <td>No Commision*</td>
                   <td>Within 1 Business Day</td>
                   <td className="text-center">
                     <button onClick={()=>{ window.open('https://secure.cabanacapitals.com/login/','_self')}} className="depositeOutlineButton">DEPOSIT</button>
                   </td>
                 </tr>
                 <tr>
                   <td>
                     <img
                       src="/assets/images/bank-wire-logo_.png"
                       className="depositeLogoImage"
                       alt="payment logo"
                     ></img>
                   </td>
                   <td>Local Transfer</td>
                   <td>
                     USD,AED,NGN and
                     <br /> local currencies
                   </td>
                   <td>No Commision*</td>
                   <td>Within 1 Business Day</td>
                   <td className="text-center">
                     <button onClick={()=>{ window.open('https://secure.cabanacapitals.com/login/','_self')}} className="depositeOutlineButton">DEPOSIT</button>
                   </td>
                 </tr>
                 <tr>
                   <td>
                     <img
                       src="/assets/images/bank-wire-logo_.png"
                       className="depositeLogoImage"
                       alt="payment logo"
                     ></img>
                   </td>
                   <td>
                     Local Transfer for
                     <br />
                     DUBAI,UAE,ASIA,
                     <br />
                     EUROPE
                   </td>
                   <td>USD,AED,INR</td>
                   <td>No Commision*</td>
                   <td>Within 1 Business Day</td>
                   <td className="text-center">
                     <button onClick={()=>{ window.open('https://secure.cabanacapitals.com/login/','_self')}} className="depositeOutlineButton">DEPOSIT</button>
                   </td>
                 </tr>
               </tbody>
             </table>
           </div>




         </div> </>
        );
    }
}

export default DEPOSITTable;
