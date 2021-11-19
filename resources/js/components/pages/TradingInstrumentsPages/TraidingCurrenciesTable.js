import React, { Component } from 'react';

class TraidingCurrenciesTable extends Component {
    constructor(props) {
        super(props);
        this.state={
            data:[
                {Cryptocurrency:'Bitcoin',Commission:'15 USD',Leverage:'5:1',Swap:'No',ContractSize:'1',SessionTime:'24/7*'},
                {Cryptocurrency:'Litecoin',Commission:'15 USD',Leverage:'5:1',Swap:'No',ContractSize:'100',SessionTime:'24/7*'},
                {Cryptocurrency:'Ethereum',Commission:'15 USD',Leverage:'5:1',Swap:'No',ContractSize:'10',SessionTime:'24/7*'},
                {Cryptocurrency:'Bitcoin Cash',Commission:'0.05% (On Turnover)',Leverage:'5:1',Swap:'Yes',ContractSize:'100',SessionTime:'24/7*'},
                {Cryptocurrency:'Cardano',Commission:'0.05% (On Turnover)',Leverage:'5:1',Swap:'Yes',ContractSize:'10000',SessionTime:'24/7*'},
                {Cryptocurrency:'Ripple',Commission:'0.05% (On Turnover)',Leverage:'5:1',Swap:'Yes',ContractSize:'10000',SessionTime:'24/7*'},
                {Cryptocurrency:'Tron',Commission:'0.05% (On Turnover)',Leverage:'5:1',Swap:'Yes',ContractSize:'100000',SessionTime:'24/7*'},
                {Cryptocurrency:'Binance coin',Commission:'0.05% (On Turnover)',Leverage:'5:1',Swap:'Yes',ContractSize:'100',SessionTime:'24/7*'},
                {Cryptocurrency:'Polka Dot',Commission:'0.05% (On Turnover)',Leverage:'5:1',Swap:'Yes',ContractSize:'1000',SessionTime:'24/7*'},
                {Cryptocurrency:'Stellar',Commission:'0.05% (On Turnover)',Leverage:'5:1',Swap:'Yes',ContractSize:'100000',SessionTime:'24/7*'},
                {Cryptocurrency:'Doge coin',Commission:'0.05% (On Turnover)',Leverage:'5:1',Swap:'Yes',ContractSize:'100000',SessionTime:'24/7*'},
                {Cryptocurrency:'Dash',Commission:'0.05% (On Turnover)',Leverage:'5:1',Swap:'Yes',ContractSize:'100',SessionTime:'24/7*'},
                {Cryptocurrency:'Aave',Commission:'0.05% (On Turnover)',Leverage:'5:1',Swap:'Yes',ContractSize:'100',SessionTime:'24/7*'},
                {Cryptocurrency:'Link',Commission:'0.05% (On Turnover)',Leverage:'5:1',Swap:'Yes',ContractSize:'1000',SessionTime:'24/7*'},
                {Cryptocurrency:'EOS',Commission:'0.05% (On Turnover)',Leverage:'5:1',Swap:'Yes',ContractSize:'10000',SessionTime:'24/7*'},
            ]
        }
    }

    render() {
        return (
           <>    <div  style={{overflow:'scroll'}} className=" basicRow">
           <div className="DEPOSITTableWrapper">
               <h3 className="title text-center mb-4">Crypto Currencies</h3>
             <table className="table  DEPOSITTable table-striped table-bordered ">
               <thead>
                 <tr>
                   <th>Cryptocurrency</th>
                   <th>Commission</th>
                   <th>Leverage</th>
                   <th>Swap</th>
                   <th>Contract Size</th>
                   <th>Session Time </th>
                 </tr>
               </thead>
               <tbody>

                    {
                        this.state.data.map((data,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{data.Cryptocurrency}</td>
                                    <td>{data.Commission}</td>
                                    <td>{data.Leverage}</td>
                                    <td>{data.Swap}</td>
                                    <td>{data.ContractSize}</td>
                                    <td>{data.SessionTime}</td>
                                </tr>
                            )
                        })
                    }

               </tbody>
             </table>
           </div>




         </div> </>
        );
    }
}

export default TraidingCurrenciesTable;
