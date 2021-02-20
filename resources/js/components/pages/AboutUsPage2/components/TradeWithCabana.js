import React, { Component } from 'react';

class TradeWithCabana extends Component {

    componentDidMount(){
 
        
        window.addEventListener("scroll", (event) => {
            let screen=window.screen.width;
            let scroll = window.scrollY;
           if(screen>768)
           {if(screen>768){ if(scroll<2633){
            if(this.state.fixDiv)this.handleFixDiv()
        }
        if(scroll>2633)  {
        if(!this.state.fixDiv)this.handleFixDiv() }
        if(scroll>2688)   this.handleActive("swap")
        if(scroll>2888)   this.handleActive("deposit")
        if(scroll>3088)   this.handleActive("spread")
        if(scroll>3288)   this.handleActive("lang")
        if(scroll>3488)  { this.handleActive("leverage")
        if(scroll>3688)if(this.state.fixDiv)this.handleFixDiv()}
        }}
            
            console.log(scroll,this.state.fixDiv,screen)
        });
        }

    constructor(){
        super()
        this.state={active:"swap",fixDiv:false}

        this.handleActive=this.handleActive.bind(this)
        this.handleFixDiv=this.handleFixDiv.bind(this)
    }
    handleActive(value){
        this.setState({
            active :value
        })
    }
  // handle change in fixDiv
  handleFixDiv(){
    this.setState({
        fixDiv:!this.state.fixDiv
    })
     }
    renderComponent(){ 

       const {active}=this.state
        switch (active) {
            case "swap":
                
               return <SwapAccount />
            case "lang":
                
               return <MultiLang />
            case "deposit":
                
               return <FastDeposite />
            case "leverage":
                
               return <FixedLeaverage />
            case "spread":
                
               return <LowSpread />
        
            default:
                break;
        }
    }
    render() {
        const {active,fixDiv}=this.state
        return (
            <div className={fixDiv?"growthHeight  ":""}>  
            <div className={fixDiv?"tradeWithCabana  fixDiv2 mt-4":"tradeWithCabana"}>
                <div className="title mb-0 mb-md-5">WHY TRADE WITH CABANA</div>
                <div className="mainFlex">
                    <div className="sec-1 " >
                        <div onClick={()=>this.handleActive("leverage")} className={active==="leverage"?"item itemActive  mt-1 mt-md-5":"item mt-1 mt-md-5"}>
                            
                            <img src="/assets/images/fixedLeverage.png"></img>
                            <div className="text">Fixed Leverage</div>
                        </div>
                        <div onClick={()=>this.handleActive("lang")}  className={active==="lang"?"item itemActive mt-1 mt-md-2 ":"item mt-1 mt-md-2 "}>
                            
                            <img src="/assets/images/multilang.png"></img>
                            <div className="text">24/5 Multilingual<br/>
customer Service</div>
                        </div>
                    </div>
                    <div className="sec-2 mt-0 mt-md-4">
                    <div onClick={()=>this.handleActive("swap")}  className={active==="swap"?"item itemActive ":"item "}>
                            
                            <img src="/assets/images/freeAcc.png"></img>
                            <div className="text">	Swap Free Account <br/>
Withdrawal</div>
                        </div>

                        <div className="centerDiv mt-5 d-none d-md-inline"><div className="shapeTradeBg">
                           {this.renderComponent()}
                            </div></div>
                    </div>
                    <div className="sec-3">
                    <div onClick={()=>this.handleActive("deposit")}   className={active==="deposit"?"item itemActive mt-1 mt-md-5 pt-0 pt-md-4":"item mt-1 mt-md-5 pt-0 pt-md-4"}>
                            
                            <img src="/assets/images/fastDeposit.png"></img>
                            <div className="text">Fast Deposit <br/>
Withdrawal</div>
                        </div>
                        <div onClick={()=>this.handleActive("spread")} className={active==="spread"?"item itemActive ":"item "}>
                            
                            <img src="/assets/images/lowSpread.png"></img>
                            <div className="text">	Lowest Spread</div>
                        </div>
                    </div>
                </div>
            </div>
  </div>
                
          
        );
    }
}

export default TradeWithCabana;

const SwapAccount=()=>{
    return <>  <div className="text">Swap Free Accounts are available to all clients</div>
                            
    <button className="createBtn mt-2" >Create</button>  </>
}
const LowSpread=()=>{
    return <>  <div className="text">Low Spread</div>
                            
    <button className="createBtn mt-2" >Create</button>  </>
}
const FastDeposite=()=>{
    return <>  <div className="text">Fast deposite</div>
                            
    <button className="createBtn mt-2" >Create</button>  </>
}
const MultiLang=()=>{
    return <>  <div className="text">MultiLang</div>
                            
    <button className="createBtn mt-2" >Create</button>  </>
}
const FixedLeaverage=()=>{
    return <>  <div className="text">Leverage</div>
                            
    <button className="createBtn mt-2" >Create</button>  </>
}
