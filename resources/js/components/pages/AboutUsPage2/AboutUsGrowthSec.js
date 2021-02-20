import React, { Component } from 'react';
import Growth2017 from './components/Growth2017';
import $ from "jquery"
class AboutUsGrowthSec extends Component {
   
componentDidMount(){
 

window.addEventListener("scroll", (event) => {
    let scroll = window.scrollY;
    if(scroll<1380){
        if(this.state.fixDiv)this.handleFixDiv()
    }
    if(scroll>1380)  {
    if(!this.state.fixDiv)this.handleFixDiv() }
    if(scroll>1588)   this.handleActiveYear("17")
    if(scroll>1788)   this.handleActiveYear("18")
    if(scroll>1988)   this.handleActiveYear("19")
    if(scroll>2188)   this.handleActiveYear("20")
    if(scroll>2388)  { this.handleActiveYear("21")
    if(scroll>2588)if(this.state.fixDiv)this.handleFixDiv()
}
    
    console.log(scroll,this.state.fixDiv)
});
}
   
    
    constructor(){
        super()
        this.state={activeYear:"17",fixDiv:false}
this.handleActiveYear=this.handleActiveYear.bind(this)
this.handleFixDiv=this.handleFixDiv.bind(this)
    }

    // handle change in activeYear
    handleActiveYear(year){
   this.setState({
       activeYear:year,
   })
    }
    // handle change in fixDiv
    handleFixDiv(){
   this.setState({
       fixDiv:!this.state.fixDiv
   })
    }

    renderYearPage(){
        const {activeYear}=this.state
        
       
        switch (activeYear) {
            case "17":
                
               return <Growth2017 year={activeYear} />
            case "18":
                
               return <Growth2017 year={activeYear} />
            case "19":
                
               return <Growth2017 year={activeYear} />
            case "20":
                
               return <Growth2017 year={activeYear} />
            case "21":
                
               return <Growth2017 year={activeYear} />
        
            default:
                break;
        }
    }
    render() {
        const {activeYear,fixDiv}=this.state
        return (
           <div className={fixDiv===true?"growthHeight ":""}>
                <div id="trigger1" className={fixDiv===true?"growthRow aboutUs2Bg fixDiv":"growthRow aboutUs2Bg "}>
                <div className="growthTitle">Exponential Growth over The Years</div>
                <div id="pin1" className="growthflex">
                    <div className="growthYearBar">
                        <div onClick={()=>this.handleActiveYear("17")} className={activeYear==="17"?"growthYearItem growthYearItemActive":"growthYearItem"}>2017</div>
                        <div onClick={()=>this.handleActiveYear("18")} className={activeYear==="18"?"growthYearItem growthYearItemActive":"growthYearItem"}>2018</div>
                        <div onClick={()=>this.handleActiveYear("19")} className={activeYear==="19"?"growthYearItem growthYearItemActive":"growthYearItem"}>2019</div>
                        <div onClick={()=>this.handleActiveYear("20")} className={activeYear==="20"?"growthYearItem growthYearItemActive":"growthYearItem"}>2020</div>
                        <div onClick={()=>this.handleActiveYear("21")} className={activeYear==="21"?"growthYearItem growthYearItemActive":"growthYearItem"}>2021</div>
                       
                    </div>
                    <div className='growthYearContent'>{this.renderYearPage()}</div>
                </div>
            </div>
           </div>
        );
    }
}

export default AboutUsGrowthSec;