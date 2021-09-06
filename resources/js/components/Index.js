import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import {BrowserRouter, Route, Switch } from "react-router-dom";
import FrontIndex from './App';
import AdminLogin from './Admin/Auth/Login';
import AdminPanel from './Admin/Index';

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './Redux/Reducer';

const store = createStore(reducer);

class Index extends Component {
    constructor(props) {
        super(props);
        this.state={
            paths:["/about-us","/trading-terms","/account-type",
            "/affiliate-program","/mission-and-values","/education/meta-trader-4",
            "/trading-instruments","/trading-currencies","/introducing-broker",
            "/negative-balance-protection","/reffer-friend","/trading-memory/:id",
            "/white-label","/social-trading","/islamic-trading","/trading-termonology",
            "/precious-metals","/cfd-incdices","/comodoties","/faqs","/protection-funds",
            "/mt4-platform","/mt5-platform","/promotion","/newPromotion","/platform/mt5",
            "/PAMM","/our-location","/cookie-policy","/regulatory-compliance","/privacy-policy",
            "/risk-disclouser","/instruction-security","/terms-and-condition","/deposite-withdraw","/education",'/analytics','/strategy-manager',
            "/bonus-terms",'/refer-terms'
        ]
        }
    }

    render(){
        return (
           <BrowserRouter>
            <Route exact path="/" component={FrontIndex} ></Route>
            {
                this.state.paths.map((data,index)=>{
                    return(
                        <Route key={index} path={data} component={FrontIndex} ></Route>

                    )
                })
            }
            <Route path="/adminpanel" component={AdminPanel} ></Route>
            <Route path="/admin-login" component={AdminLogin} ></Route>
           </BrowserRouter>
        );
    }

}

export default Index;

if (document.getElementById('root')) {
    ReactDOM.render(<Provider store={store}> <Index /> </Provider>, document.getElementById('root'));
}
